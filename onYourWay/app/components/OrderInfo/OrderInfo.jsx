import React, { useRef } from "react";
import { Image, Text, View } from "react-native";

import colors from "../../config/colors";
import OrderStatus from "../OrderStatus/OrderStatus";
import SmallButton from "../SmallButton/SmallButton";
import UserInfo from "../userInfo/UserInfo";
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
}) {
  const userInfoBSheet = useRef();
  const orderStatusBSheet = useRef();

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
        <SmallButton
          value={"Info"}
          onPress={() => userInfoBSheet.current.open()}
        />
        <SmallButton value={"CHAT"} />
        <SmallButton
          value={"STATUS"}
          color={colors.secondary}
          onPress={() => orderStatusBSheet.current.open()}
        />
      </View>
      <UserInfo refRBSheet={userInfoBSheet} />
      <OrderStatus refRBSheet={orderStatusBSheet} isReceiver={true} />
    </View>
  );
}

export default OrderInfo;
