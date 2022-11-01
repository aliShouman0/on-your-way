import React, { useState } from "react";
import { Dimensions, Text, View, TouchableOpacity } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import styles from "./styles";
function CompletedOrder({ refRBSheet }) {
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
      animationType={"fade"}
      height={windowHeight / 2}
      customStyles={{
        draggableIcon: styles.draggableIcon,
        container: styles.container,
      }}
    ></RBSheet>
  );
}

export default CompletedOrder;
