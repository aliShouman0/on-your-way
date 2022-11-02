import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet"; 

import styles from "./styles";
function UploadImage({ refRBSheet, setImage }) {
  
  return (
    <RBSheet
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
      animationType={"fade"}
      height={150}
    >
     
    </RBSheet>
  );
}

export default UploadImage;
