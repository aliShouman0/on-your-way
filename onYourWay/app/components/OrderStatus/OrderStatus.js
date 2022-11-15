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
  const [value, setValue] = useState("Not Started");
  const [load, setLoad] = useState(false);
  const [save, setSave] = useState(false);
  const [items, setItems] = useState(controller.items);
  const [accessLiveLocation, setAccessLiveLocation] = useState(liveLocation);
  const locationBtnValue = `${
    isReceiver
      ? accessLiveLocation
        ? "Live"
        : "No "
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

  controller.liveLocationUseEffect(
    liveLocationIsError,
    liveLocationResult,
    liveLocationError,
    setLiveLocation,
    pickupId,
    setAccessLiveLocation,
    accessLiveLocation
  );

  //accessLocation
  controller.accessLocationUseEffect(
    setLoad,
    accessLocationIsError,
    accessLocationResult,
    accessLocationError,
    setAccessLiveLocation,
    accessLiveLocation
  );

  //addOrUpdatePickup
  controller.pickupResultUseEffect(
    setLoad,
    pickupIsError,
    pickupResult,
    pickupError,
    refetchStatus
  );
  //orderStatus
  controller.resultUseEffect(
    setLoad,
    result,
    setValue,
    setDate,
    setLocation,
    isError,
    error
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
