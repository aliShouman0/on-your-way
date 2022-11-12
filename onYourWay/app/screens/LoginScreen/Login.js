import React, { useState } from "react";
import {
  Text,
  Image,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import { useMutation } from "react-query";
import Toast from "react-native-root-toast";

import AppButton from "../../components/AppButton/AppButton";
import Input from "../../components/Input/Input";
import styles from "./styles";
import main from "../../config/main";
import Loading from "../../components/Loading/Loading";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    mutate: login,
    isError,
    isLoading,
    error: loginUpError,
    status,
    data: result,
  } = useMutation((user) => main.login(user));

  const onLogin = async () => {
    if (!email || !password) {
      alert("All Image Are Required");
      return;
    }
  };

  if (isLoading) {
    return <Loading />;
  }
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
        <AppButton value={"Login"} onPress={onLogin} />
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signup}>
            Don't have an account? <Text style={styles.register}>Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Login;
