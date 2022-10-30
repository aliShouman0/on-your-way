import React from "react";
import { Image, Text, View } from "react-native";

import colors from "../../config/colors";
import SmallButton from "../SmallButton/SmallButton";
import styles from "./styles";

function OrderInfo() {
  return (
    <View style={styles.mainView}>
      <View style={styles.userInfo}>
        <Image
          resizeMode="contain"
          source={require("../../assets/user2.jpg")}
          style={styles.userImg}
        />
        <Text style={styles.userName}>User Name</Text>
      </View>
     
    </View>
  );
}

export default OrderInfo;
