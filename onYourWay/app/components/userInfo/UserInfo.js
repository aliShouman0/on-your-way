import React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Rate from "../Rate/Rate";
import LightInput from "../LightInput/LightInput";

import styles from "./styles";

function UserInfo({
  refRBSheet,
  userName,
  userEmail,
  userPhone,
  userAddress,
  userImg,
  userRate,
  orderCount,
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
          <Rate
            rate={
              orderCount == 0
                ? 0
                : Math.round(Math.round(userRate) / orderCount)
            }
          />
        </View>
        <View style={styles.userDetails}>
          <LightInput
            text="Name"
            editable={false}
            contextMenuHidden={true}
            value={userName}
          />
          <LightInput
            text="Email"
            editable={false}
            contextMenuHidden={true}
            value={userEmail}
          />
          <LightInput
            text="Phone"
            editable={false}
            contextMenuHidden={true}
            value={userPhone}
          />
          <LightInput
            text="Address"
            editable={false}
            contextMenuHidden={true}
            value={userAddress}
          />
        </View>
      </View>
    </RBSheet>
  );
}

export default UserInfo;
