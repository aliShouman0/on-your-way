import React, { useState, useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import AppButton from "../../components/AppButton/AppButton";
import styles from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import { StackActions } from "@react-navigation/native";

function NextSignupScreen({ navigation }) {
  const refRBSheet = useRef();
  const [photo, setPhoto] = useState(null);
  const [frontId, setFrontId] = useState(null);
  const [backId, setBackId] = useState(null);
  const [imageFor, setImageFor] = useState("");

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
      switch (imageFor) {
        case "photo":
          setPhoto(photo.uri);
          break;
        case "frontId":
          setFrontId(photo.uri);

          break;
        case "backId":
          setBackId(photo.uri);

          break;
        default:
          break;
      }
    }
    console.log(photo.uri);
    refRBSheet.current.close();
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        animationType={"fade"}
        height={150}
      >
        <View style={styles.sheetView}>
          <TouchableOpacity onPress={() => getImage("camera")}>
            <FontAwesome name="camera" size={45} style={styles.iconSheet} />
            <Text style={styles.sheetText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getImage("library")}>
            <Entypo name="folder-images" size={45} style={styles.iconSheet} />
            <Text style={styles.sheetText}>Image Library</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
      <Navbar type={"register"} title={"Register"} navigation={navigation} />
      <View style={styles.view}>
        <Text style={styles.text}>Upload your profile photo</Text>
        <TouchableOpacity
          onPress={() => {
            setImageFor("photo");
            refRBSheet.current.open();
          }}
        >
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="camera-plus"
              size={35}
              color="black"
            />
            <Text>Your Photo</Text>
          </View>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={photo ? { uri: photo } : ""}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Upload the required docs</Text>
      <View style={styles.idContainer}>
        <TouchableOpacity
          onPress={() => {
            setImageFor("frontId");
            refRBSheet.current.open();
          }}
        >
          <View style={styles.icon}>
            <MaterialIcons name="add-photo-alternate" size={35} color="black" />
            <Text>Front ID </Text>
          </View>
          <Image
            resizeMode="contain"
            style={styles.imgId}
            source={frontId ? { uri: frontId } : ""}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setImageFor("backId");
            refRBSheet.current.open();
          }}
        >
          <View style={styles.icon}>
            <MaterialIcons name="add-photo-alternate" size={35} color="black" />
            <Text>Back ID </Text>
          </View>
          <Image
            resizeMode="contain"
            style={styles.imgId}
            source={backId ? { uri: backId } : ""}
          />
        </TouchableOpacity>
      </View>
      <AppButton
        value={"SIGNUP"}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          })
        }
      />
    </SafeAreaView>
  );
}

export default NextSignupScreen;
