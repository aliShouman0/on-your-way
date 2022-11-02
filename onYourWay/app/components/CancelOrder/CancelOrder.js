import React, { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

import Input from "../Input/Input.js";
import AppButton from "../AppButton/AppButton";
import styles from "./styles";
function CancelOrder({ refRBSheet }) {
  const [reason, setReason] = useState("");
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
    >
      <View style={styles.view}>
        <Text style={styles.textTitle}>Are you sure ?</Text>
        <Text style={styles.textSmall}>
          Please specify why You are cancelling
        </Text>
        <Input
          text="Reason"
          value={reason}
          setValue={setReason}
          multiline={true}
          style={styles.input}
        />
        <Text style={styles.note}>
          Note: that will affect your rate if the pickup accepted
        </Text>
        <AppButton
          value={"Cancel"}
          onPress={() => {
            refRBSheet.current.close();
          }}
        />
      </View>
    </RBSheet>
  );
}

export default CancelOrder;
