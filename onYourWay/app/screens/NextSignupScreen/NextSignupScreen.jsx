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

import AppButton from "../../components/AppButton/AppButton";
import styles from "./styles";
import Navbar from "../../components/Navbar/Navbar"; 

function NextSignupScreen({ navigation }) {
  const refRBSheet = useRef();
  const [photo, setPhoto] = useState(null);
  const [frontId, setFrontId] = useState(null);
  const [backId, setBackId] = useState(null);
  const [imageFor, setImageFor] = useState("");

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
          <TouchableOpacity onPress={() => {}}>
            <FontAwesome name="camera" size={45} style={styles.iconSheet} />
            <Text style={styles.sheetText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
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
