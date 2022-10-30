import React from "react";
import { Image, Text, View } from "react-native";

import colors from "../../config/colors";
import SmallButton from "../SmallButton/SmallButton";
import styles from "./styles";

function OrderInfo({
  id,
  userName,
  userImg,
  from,
  to,
  pay,
  orderImg,
  orderDescription,
  onInfoPress,
  onChatPress,
  onStatusPress,
}) {
  return (
    <View style={styles.mainView}>
      <View style={styles.userInfo}>
        <Image resizeMode="contain" source={userImg} style={styles.userImg} />
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <View style={styles.orderDetails}>
        <View style={styles.container}>
          <Text style={styles.key}>From</Text>
          <Text style={styles.value}>{from}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.key}>To</Text>
          <Text style={styles.value}>{to}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.key}>Pay</Text>
          <Text style={styles.value}>{pay}</Text>
        </View>
      </View>
      <Image resizeMode="contain" source={orderImg} style={styles.orderImg} />
      <Text style={styles.description}>{orderDescription}</Text>
      <View style={styles.btnContainer}>
        <SmallButton value={"Info"} onPress={onInfoPress} />
        <SmallButton value={"CHAT"} onPress={onChatPress} />
        <SmallButton
          value={"STATUS"}
          onPress={onStatusPress}
          color={colors.secondary}
        />
      </View>
    </View>
  );
}

export default OrderInfo;
