import React, { useEffect, useState } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";

import styles from "./styles";
import main from "../../config/main";
import Loading from "../../components/Loading/Loading";


const CustomDrawer = (props) => {
  const account = props.state.index == 5;
  const [data, setData] = useState("");
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setLoad(true);
    const getData = async () => {
      const res = await SecureStore.getItemAsync("user_info");
      setData(JSON.parse(res));
      setLoad(false);
    };
    getData();
  }, []);
  if (load) {
    return <Loading />;
  }
  return (
    <View style={styles.mainView}>
      <DrawerContentScrollView {...props}>
        <View style={styles.view}>
          <Image
            resizeMode="contain"
            source={
              data && data.avatar
                ? { uri: main.baseLink + data.avatar }
                : require("../../assets/user.png")
            }
            style={styles.userImg}
          />
          <Text style={styles.text}>{data ? data.name : "Loading..."}</Text>
        </View>
        <View style={styles.drawerListWrapper}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.footerContent, account && styles.active]}
          onPress={() => props.navigation.navigate("Account")}
        >
          <MaterialIcons name="account-circle" size={40} style={styles.icon} />
          <Text style={[styles.footerText, account && styles.active]}>
            Account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footerContent}
          onPress={() => props.navigation.navigate("Login")}
        >
          <MaterialCommunityIcons name="logout" size={40} style={styles.icon} />
          <Text style={styles.footerText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
