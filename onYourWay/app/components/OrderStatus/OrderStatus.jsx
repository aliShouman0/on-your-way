import React, { useRef, useState } from "react";
import { Dimensions, Image, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import DropDownPicker from "react-native-dropdown-picker";

import colors from "../../config/colors";
import SmallButton from "../SmallButton/SmallButton";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import CancelOrder from "../CancelOrder/CancelOrder";

function OrderStatus({ refRBSheet, isReceiver }) {
  const cancelOrderBSheet = useRef();
  const windowHeight = Dimensions.get("window").height;

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
        <View style={styles.view}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="stretch"
              source={require("../../assets/keyboard.jpg")}
              style={styles.img}
            />
            <Image
              resizeMode="stretch"
              source={require("../../assets/keyboard.jpg")}
              style={styles.img}
            />
          </View>

          <View style={styles.orderStatus}>
            {!isReceiver && (
              <DropDownPicker
                placeholder="Status"
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
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
            )}
          </View>
          <View style={styles.btnContainer}>
            <SmallButton value={"Received"} color={colors.secondary} />
            <SmallButton value={"Request \n live Location"} />
            <SmallButton
              value={"Cancel"}
              onPress={() => {
                refRBSheet.current.close();
                cancelOrderBSheet.current.open();
              }}
            />
          </View>
        </View>
      </RBSheet>
      <CancelOrder refRBSheet={cancelOrderBSheet} />
    </>
  );
}

export default OrderStatus;
