import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Rate from "../Rate/Rate";
import LightInput from "../LightInput/LightInput";

import styles from "./styles";

function UserInfo({ refRBSheet, image }) {
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
          <Image source={image} style={styles.userImg} />
          <Rate rate={2} />
        </View>
        <View style={styles.userDetails}>
          <LightInput
            text="Name"
            editable={false}
            contextMenuHidden={true}
            value={"Alex"}
          />
          <LightInput
            text="Email"
            editable={false}
            contextMenuHidden={true}
            value={"alex@gmail.com"}
          />
          <LightInput
            text="Phone"
            editable={false}
            contextMenuHidden={true}
            value={"71974454"}
          />
          <LightInput
            text="Address"
            editable={false}
            contextMenuHidden={true}
            value={"Byblos"}
          />
        </View>
      </View>
    </RBSheet>
  );
}

export default UserInfo;
