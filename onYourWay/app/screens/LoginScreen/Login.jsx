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
import Input from "../../components/Input/Input";
import styles from "./styles";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.mainView}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require("../../assets/logo-gold.png")}
      />

      <View style={styles.inputContainer}>
        <Input
          text="Email"
          keyboardType="email-address"
          value={email}
          setValue={setEmail}
        />
        <Input
          text="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <AppButton
          value={"Login"}
          onPress={() => console.log(email, password)}
        />
        <TouchableOpacity onPress={() => console.log("no")}>
          <Text style={styles.signup}>
            Don't have an account? <Text style={styles.register}>Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Login;
