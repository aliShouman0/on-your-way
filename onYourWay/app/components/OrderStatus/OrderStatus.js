import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import Toast from "react-native-root-toast";
import { useMutation, useQuery } from "react-query";
import { AntDesign } from "@expo/vector-icons";

import colors from "../../config/colors";
import SmallButton from "../SmallButton/SmallButton";
import styles from "./styles";
import LightInput from "../LightInput/LightInput";
import CancelOrder from "../CancelOrder/CancelOrder";
import ReceiveOrder from "../ReceiveOrder/ReceiveOrder";
import AppButton from "../AppButton/AppButton";
import main from "../../config/main";
import Loading from "../Loading/Loading";

function OrderStatus({
  refRBSheet,
  isReceiver,
  navigation,
  setRefreshing,
  liveLocation,
  id,
  pickupId,
  setIsLoading,
}) {
  const cancelOrderBSheet = useRef();
  const receiveOrderBSheet = useRef();
  const windowHeight = Dimensions.get("window").height;
  const [location, setLocation] = useState("NA");
  const [date, setDate] = useState(new Date());
  const [openTime, setopenTime] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Not Started");
  const [load, setLoad] = useState(false);
  const [save, setSave] = useState(false);
  const locationBtnValue = `${
    isReceiver
      ? liveLocation
        ? "Live"
        : "No "
      : liveLocation
      ? "Reject"
      : "Accept"
  }\nlocation`;

  const {
    isLoading,
    data: result,
    isError,
    error,
    refetch: refetchStatus,
  } = useQuery(
    isReceiver ? "orderStatusReceiver" : "orderStatusPicker",
    () => main.OrderStatus(id),
    {
      refetchOnMount: "always",
      refetchOnWindowFocus: true,
    }
  );

  const {
    mutate,
    isError: pickupIsError,
    isLoading: pickupLoad,
    error: pickupError,
    data: pickupResult,
  } = useMutation(main.addOrUpdatePickup);

  const [items, setItems] = useState([
    { label: "Problem", value: "problem" },
    { label: "Not Started", value: "not" },
    { label: "Awaiting Info", value: "awaiting" },
    { label: "Hold", value: "hold" },
    { label: "Picking", value: "picking" },
    { label: "Picked", value: "picked" },
    { label: "On Way", value: "onWay" },
  ]);

  const onLocationSubmit = () => {
    setLoad(false);
    if (liveLocation) {
      refRBSheet.current.close();
      navigation.navigate("Location", { pickupId });
    } else setLoad(true);
  };

  const onSavePress = () => {
    setLoad(false);
    if (!location) {
      alert("Location is required");
      setLoad(true);
      return;
    } 
  };

  if (isError || (result && (result === 401 || result === 400))) {
    Toast.show("Some Thing went Wrong 😔", {
      duration: Toast.durations.LONG,
    });
    console.log(error);
    setLoad(false);
  } 

  useEffect(() => {
    setLoad(false);

    if (result && result.status === 200) {
      if (result.data.status === 1) {
        setValue(result.data.data.status);
        setDate(new Date(parseInt(result.data.data.arrived_time) * 1000));
        setLocation(result.data.data.location);
        setLoad(true);
      }
    }
  }, [result]);

  return (
    <>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        animationType={"fade"}
        height={(windowHeight * 3) / 4}
        customStyles={{
          draggableIcon: styles.draggableIcon,
          container: styles.container,
        }}
      >
        {isLoading || pickupLoad ? (
          <Loading />
        ) : (
          <>
            <View style={styles.view}>
              <View style={styles.imageContainer}>
                <Image
                  resizeMode="stretch"
                  source={
                    load
                      ? {
                          uri:
                            main.baseLink + result.data.data.order_info.image1,
                        }
                      : ""
                  }
                  style={styles.img}
                />
                <Image
                  resizeMode="stretch"
                  source={
                    load
                      ? {
                          uri:
                            main.baseLink + result.data.data.order_info.image2,
                        }
                      : ""
                  }
                  style={styles.img}
                />
              </View>
              <View style={styles.orderStatus}>
                {isReceiver && (
                  <LightInput
                    text={"Current\nstatus"}
                    editable={false}
                    contextMenuHidden={true}
                    value={value}
                    style={styles.lightInput}
                    textStyle={styles.text}
                  />
                )}
                {!isReceiver && (
                  <>
                    <View style={styles.statusContainer}>
                      <Text style={styles.statusText}>{"Current\nstatus"}</Text>
                      <DropDownPicker
                        placeholder="Status"
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        onOpen={() => setSave(true)}
                        setValue={setValue}
                        setItems={setItems}
                        disabled={isReceiver}
                        showArrowIcon={!isReceiver}
                        textStyle={styles.textStyle}
                        containerStyle={styles.containerStyle}
                        style={styles.style}
                        dropDownContainerStyle={styles.dropDownContainerStyle}
                        ArrowUpIconComponent={() => (
                          <AntDesign name="up" size={24} color="white" />
                        )}
                        ArrowDownIconComponent={() => (
                          <AntDesign name="down" size={24} color="white" />
                        )}
                      />
                    </View>
                  </>
                )}

                <TouchableOpacity
                  style={styles.time}
                  onPress={() => {
                    if (!isReceiver) {
                      setSave(true);
                      setopenTime(true);
                    }
                  }}
                >
                  <LightInput
                    text={"Average\ntime"}
                    editable={false}
                    contextMenuHidden={true}
                    value={`${date.getHours()}:${date.getMinutes()}`}
                    style={styles.lightInput}
                    textStyle={styles.text}
                  />
                </TouchableOpacity>
                <LightInput
                  text={"Current\nlocation"}
                  editable={!isReceiver}
                  contextMenuHidden={isReceiver}
                  value={location}
                  setValue={setLocation}
                  style={styles.lightInput}
                  textStyle={styles.text}
                  onFocus={() => setSave(true)}
                />
              </View>
              {!isReceiver && (
                <AppButton
                  value={"Save"}
                  style={[
                    styles.save,
                    !save ? { backgroundColor: "grey" } : "",
                  ]}
                  onPress={onSavePress}
                />
              )}
              <View style={styles.btnContainer}>
                <SmallButton
                  value={"Received"}
                  color={colors.secondary}
                  onPress={() => {
                    refRBSheet.current.close();
                    receiveOrderBSheet.current.open();
                  }}
                />
                <SmallButton
                  value={locationBtnValue}
                  onPress={onLocationSubmit}
                  color={!isReceiver || liveLocation ? "" : "grey"}
                />
                <SmallButton
                  value={"Cancel"}
                  onPress={() => {
                    refRBSheet.current.close();
                    cancelOrderBSheet.current.open();
                  }}
                />
              </View>
            </View>
          </>
        )}
        {openTime && (
          <DateTimePicker
            value={date}
            mode="time"
            onChange={(e, date) => {
              setDate(date);
              setopenTime(false);
            }}
          />
        )}
      </RBSheet>
      <CancelOrder
        refRBSheet={cancelOrderBSheet}
        setRefreshing={setRefreshing}
        pickupId={pickupId}
      />
      <ReceiveOrder
        refRBSheet={receiveOrderBSheet}
        setRefreshing={setRefreshing}
        pickupId={pickupId}
        orderId={id}
      />
    </>
  );
}

export default OrderStatus;
