import React, { useState } from "react";
import {
  Text,
  Image,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import AppButton from "../../components/AppButton/AppButton";
import styles from "./styles";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.mainView}>
      
    </SafeAreaView>
  );
}

export default Signup;
