import React from "react";
import { Dimensions } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import styles from "./styles";
function CancelOrder({ refRBSheet, isReceiver }) {
  const windowHeight = Dimensions.get("window").height;

  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
      animationType={"fade"}
      height={(windowHeight * 1) / 2}
      customStyles={{
        draggableIcon: styles.draggableIcon,
        container: styles.container,
      }}
    ></RBSheet>
  );
}

export default CancelOrder;
