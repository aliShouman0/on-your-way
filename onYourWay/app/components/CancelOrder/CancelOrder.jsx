import React from "react";
import { Dimensions } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Input from "../Input/Input";

import styles from "./styles";
function CancelOrder({ refRBSheet }) {
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
    >
      <View styles={styles.view}>
        <Text styles={styles.textTitle}>Are you sure ?</Text>
        <Text styles={styles.textSmall}>
          Please specify why You are cancelling
        </Text>
      </View>
    </RBSheet>
  );
}

export default CancelOrder;
