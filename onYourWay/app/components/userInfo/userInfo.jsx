import React, { useRef } from "react";
import { Dimensions, Text, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import colors from "../../config/colors";
import styles from "./styles";

function UserInfo({ refRBSheet }) {
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
      <View style={styles.sheetView}></View>
    </RBSheet>
  );
}

export default UserInfo;
