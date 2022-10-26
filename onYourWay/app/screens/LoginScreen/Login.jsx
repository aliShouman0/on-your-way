import React from "react";
import {
  Text,
  Image,
  SafeAreaView,
  TextInput,
  View,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
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

      <View style={styles.inputContainer}>
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

        <TouchableOpacity onPress={() => console.log("no")}>
          <Text style={styles.signup}>No Account ,It's easy</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Login;
