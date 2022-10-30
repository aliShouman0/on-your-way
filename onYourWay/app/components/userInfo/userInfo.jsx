import React, { useRef } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import colors from "../../config/colors";
import styles from "./styles";

function UserInfo({ refRBSheet, image }) {
  const refRBSheet1 = useRef();
  const windowHeight = Dimensions.get("window").height;

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
    >
      <View style={styles.sheetView}>
        <View style={styles.userInfo}>
          <Image source={image}  style={styles.userImg}/>
        </View>
        <View style={styles.userDetails}></View>
      </View>
    </RBSheet>
  );
}

export default UserInfo;
