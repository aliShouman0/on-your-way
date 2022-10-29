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
    </SafeAreaView>
  );
}

export default NextSignupScreen;
