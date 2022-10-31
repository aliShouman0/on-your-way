import React, { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import styles from "./styles";
function ReceiveOrder({ refRBSheet }) {
  const windowHeight = Dimensions.get("window").height;

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
      animationType={"fade"}
      height={(windowHeight * 11) / 20}
      customStyles={{
        draggableIcon: styles.draggableIcon,
        container: styles.container,
      }}
    ></RBSheet>
  );
}

export default ReceiveOrder;
