import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Rate from "../Rate/Rate";
import LightInput from "../LightInput/LightInput";

import styles from "./styles";

function UserInfo({
  refRBSheet,
  pickerName,
  pickerEmail,
  pickerPhone,
  pickerAddress,
  userImg,
  pickerRate,
}) {
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
      <View style={styles.sheetView}>
        <View style={styles.userInfo}>
          <Image source={userImg} style={styles.userImg} />
          <Rate rate={Math.round(pickerRate)} />
        </View>
        <View style={styles.userDetails}>
          <LightInput
            text="Name"
            editable={false}
            contextMenuHidden={true}
            value={pickerName}
          />
          <LightInput
            text="Email"
            editable={false}
            contextMenuHidden={true}
            value={pickerEmail}
          />
          <LightInput
            text="Phone"
            editable={false}
            contextMenuHidden={true}
            value={pickerPhone}
          />
          <LightInput
            text="Address"
            editable={false}
            contextMenuHidden={true}
            value={pickerAddress}
          />
        </View>
      </View>
    </RBSheet>
  );
}

export default UserInfo;
