import React, { useRef, useState } from "react";
import { Dimensions, Image, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import styles from "./styles";

function OrderStatus({ refRBSheet, isReceiver }) {
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
        </View>
      </RBSheet>
    </>
  );
}

export default OrderStatus;
