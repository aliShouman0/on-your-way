import React, { useEffect, useState } from "react";
import {
  Text,
  Image,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import { useMutation } from "react-query";
import Toast from "react-native-root-toast";
import * as SecureStore from "expo-secure-store";

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
    data: result,
  } = useMutation(main.login);
  useEffect(() => {
    if (isError) {
      console.log(loginUpError);
      Toast.show("Sorry Some Thing Went Wrong 😮", {
        duration: Toast.durations.LONG,
      });
    }

    if (result && result === 401) {
      Toast.show("Thats Wrong 😔", {
        duration: Toast.durations.LONG,
      });
    }

    if (result && result.status === 200) {
      Toast.show("Login Done!! 🙂", {
        duration: Toast.durations.LONG,
      });
      const access_token = result.data.access_token;
      console.log(access_token);
      ContinueLogin(access_token);
    }
  }, [result]);

  const onLogin = async () => {
    if (!email || !password) {
      alert("All Inputs Are Required");
      return;
    }
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    login(data);
  };
  const ContinueLogin = async (access_token) => {
    await SecureStore.setItemAsync("secure_token", access_token);
    const token = await SecureStore.getItemAsync("secure_token");
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
