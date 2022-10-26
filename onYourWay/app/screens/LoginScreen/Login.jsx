import React from "react";
import { Text, Image, SafeAreaView } from "react-native";
import styles from "./styles";

function Login() {
  return (
    <SafeAreaView style={styles.mainView}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require("../../assets/logo-white.png")}
      />
    </SafeAreaView>
  );
}

export default Login;
