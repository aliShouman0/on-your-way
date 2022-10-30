import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import styles from "./styles";

function OrderStatus({ refRBSheet }) {
  const windowHeight = Dimensions.get("window").height;

  return (
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
      <View style={styles.view}></View>
    </RBSheet>
  );
}

export default OrderStatus;
