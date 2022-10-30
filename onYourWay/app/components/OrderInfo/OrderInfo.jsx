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
      <View style={styles.orderDetails}>
        <View style={styles.container}>
          <Text style={styles.key}>From</Text>
          <Text style={styles.value}>Beirut</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.key}>To</Text>
          <Text style={styles.value}>Byblos</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.key}>Pay</Text>
          <Text style={styles.value}>34600L.L</Text>
        </View>
      </View>
      <Image
        resizeMode="contain"
        source={require("../../assets/keyboard.jpg")}
        style={styles.orderImg}
      />
      <Text style={styles.description}>keyboard and mouse</Text>
      <View style={styles.btnContainer}>
        <SmallButton value={"Info"} onPress={() => console.log("hi Info")} />
        <SmallButton value={"CHAT"} onPress={() => console.log("hi CHAT")} />
        <SmallButton
          value={"STATUS"}
          onPress={() => console.log("hi STATUS")}
          color={colors.secondary}
        />
      </View>
    </View>
  );
}

export default OrderInfo;
