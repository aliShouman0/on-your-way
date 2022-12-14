import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
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
import controller from "./controller";

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
  const [value, setValue] = useState("Pending");
  const [load, setLoad] = useState(false);
  const [save, setSave] = useState(false);
  const [items, setItems] = useState(controller.items);
  const [accessLiveLocation, setAccessLiveLocation] = useState(liveLocation);
  const locationBtnValue = `${
    isReceiver
      ? accessLiveLocation
        ? "Live"
        : "No live"
      : accessLiveLocation
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
    [isReceiver ? "orderStatusReceiver" + id : "orderStatusPicker" + id],
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

  const {
    mutate: accessLocation,
    isError: accessLocationIsError,
    error: accessLocationError,
    data: accessLocationResult,
  } = useMutation(main.accessLocation);

  const {
    mutate: setLiveLocation,
    isError: liveLocationIsError,
    error: liveLocationError,
    data: liveLocationResult,
    isLoading: liveLocationLoad,
  } = useMutation(main.setLocation);

  useEffect(() => {
    if (accessLiveLocation && !isReceiver) {
      setTimeout(() => {
        controller.sendMyLocation(setLiveLocation, pickupId);
      }, 11000);
    }
  }, []);

  controller.liveLocationUseEffect(
    liveLocationIsError,
    liveLocationResult,
    liveLocationError,
    setLiveLocation,
    pickupId,
    setAccessLiveLocation,
    accessLiveLocation,
    navigation
  );

  //accessLocation
  controller.accessLocationUseEffect(
    setLoad,
    accessLocationIsError,
    accessLocationResult,
    accessLocationError,
    setAccessLiveLocation,
    accessLiveLocation,
    navigation
  );

  //addOrUpdatePickup
  controller.pickupResultUseEffect(
    setLoad,
    pickupIsError,
    pickupResult,
    pickupError,
    refetchStatus,
    navigation
  );
  //orderStatus
  controller.resultUseEffect(
    setLoad,
    result,
    setValue,
    setDate,
    setLocation,
    isError,
    error,
    navigation
  );

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
                    load && result.data
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
                    load && result.data
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
                    text={"Order\nstatus"}
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
                      <Text style={styles.statusText}>{"Order\nstatus"}</Text>
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
                    text={"Arrival \ntime"}
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
                  onPress={() =>
                    controller.onSavePress(
                      location,
                      setLoad,
                      save,
                      pickupId,
                      date,
                      value,
                      mutate
                    )
                  }
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
                  onPress={() =>
                    controller.onLocationSubmit(
                      setLoad,
                      accessLiveLocation,
                      isReceiver,
                      refRBSheet,
                      pickupId,
                      navigation,
                      accessLocation,
                      setLiveLocation
                    )
                  }
                  color={!isReceiver || accessLiveLocation ? "" : "grey"}
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
        navigation={navigation}
      />
      <ReceiveOrder
        refRBSheet={receiveOrderBSheet}
        setRefreshing={setRefreshing}
        pickupId={pickupId}
        orderId={id}
        isReceiver={isReceiver}
        navigation={navigation}
      />
    </>
  );
}

export default OrderStatus;
