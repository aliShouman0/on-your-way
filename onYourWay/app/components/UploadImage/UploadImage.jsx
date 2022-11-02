import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import * as ImagePicker from "expo-image-picker";

import { FontAwesome, Entypo } from "@expo/vector-icons";

import styles from "./styles";
function UploadImage({ refRBSheet, setImage }) {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      return result;
    }
    return;
  };

  const camera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.granted == false) {
      alert(
        "Camera permission denied Go to settings and allow it to use the camera"
      );
      return;
    }
    const result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled) {
      return result;
    }
    return;
  };

  const getImage = async (by) => {
    let photo;
    if (by === "camera") {
      photo = await camera();
    }
    if (by === "library") {
      photo = await pickImage();
    }
    if (photo) {
      setImage(photo);
    }
    refRBSheet.current.close();
  };
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
