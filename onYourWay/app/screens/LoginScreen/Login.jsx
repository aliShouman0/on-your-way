import React from "react";
import { Text, Image, SafeAreaView, TextInput } from "react-native";
import AppButton from "../../components/AppButton/AppButton";
import styles from "./styles";

function Login() {
  return (
    <SafeAreaView style={styles.mainView}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require("../../assets/logo-white.png")}
      />

      <TextInput
        clearButtonMode="always"
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />

      <TextInput
        clearButtonMode="always"
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <AppButton value={"Login"} onPress={() => console.log("login")} />
    </SafeAreaView>
  );
}

export default Login;
