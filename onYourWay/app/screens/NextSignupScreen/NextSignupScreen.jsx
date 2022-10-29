import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import AppButton from "../../components/AppButton/AppButton";
import styles from "./styles";
import Navbar from "../../components/Navbar/Navbar";

function NextSignupScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"register"} title={"Register"} navigation={navigation} />
      <View style={styles.view}>
        <Text style={styles.text}>Upload your profile photo</Text>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="camera-plus"
              size={35}
              color="black"
            />
            <Text>Your Photo</Text>
          </View>
          <Image resizeMode="contain" style={styles.image} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Upload the required docs</Text>
      <View style={styles.idContainer}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.icon}>
            <MaterialIcons name="add-photo-alternate" size={35} color="black" />
            <Text>Front ID </Text>
          </View>
          <Image resizeMode="contain" style={styles.imgId} />
        </TouchableOpacity>

       
      </View>
      <AppButton value={"SIGNUP"} />
    </SafeAreaView>
  );
}

export default NextSignupScreen;
