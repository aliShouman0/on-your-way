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
    error: loginError,
    data: result,
  } = useMutation(main.login);
  const {
    mutate: userInfo,
    isError: userInfoIsError,
    isLoading: load,
    error: userInfoError,
    data: userInfoResult,
  } = useMutation(main.me);

  useEffect(() => {
    if (isError) {
      console.log(loginError);
      Toast.show("Sorry Some Thing Went Wrong 😮", {
        duration: Toast.durations.LONG,
      });
    }

    if (result && (result === 401 || result === 400)) {
      Toast.show("That's Wrong 😔", {
        duration: Toast.durations.LONG,
      });
    }

    if (result && result.status === 200) {
      const access_token = result.data.access_token;
      ContinueLogin(access_token);
    }
  }, [result]);

  useEffect(() => {
    if (userInfoIsError) {
      console.log(userInfoError);
      Toast.show("Sorry Some Thing Went Wrong 😮", {
        duration: Toast.durations.LONG,
      });
    }

    if (userInfoResult && userInfoResult === 401) {
      Toast.show("That's Wrong 😔", {
        duration: Toast.durations.LONG,
      });
    }

    if (userInfoResult && userInfoResult === 403) {
      Toast.show(" You are not verified yet !! 😥", {
        duration: Toast.durations.LONG,
      });
    } 
    
    if (userInfoResult && userInfoResult.status === 200) {      
      Toast.show("Login Successful !! 🙂", {
        duration: Toast.durations.LONG,
      });
      save("user_info", JSON.stringify(userInfoResult.data));
      navigation.reset({
        index: 0,
        routes: [{ name: "DrawerNavigator" }],
      });
    }
  }, [userInfoResult]);

  const onLogin = async () => {
    if (!email || !password) {
      alert("All inputs are required");
      return;
    }
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    login(data);
  };

  const ContinueLogin = async (access_token) => {
    save("access_token", access_token);
    const token = new FormData();
    token.append("token", access_token);
    userInfo(token);
  };

  const save = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
  };

  if (isLoading || load) {
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
        <AppButton value={"Login"} onPress={onLogin} style={styles.style}/>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.signup}>
            Don't have an account? <Text style={styles.register}>Register Here</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Login;
