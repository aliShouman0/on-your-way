import React, { useRef } from "react";
import { Image, Text, View } from "react-native";

import colors from "../../config/colors";
import text from "../../config/text";
import OrderStatus from "../OrderStatus/OrderStatus";
import Rate from "../Rate/Rate";
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
  isReceiver,
  completed,
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
      {completed ? (
        <View style={styles.rate}>
          <Rate rate={3} size={33} styleText={{ fontSize: text.sizeMid }} />
        </View>
      ) : (
        <>
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
          <OrderStatus refRBSheet={orderStatusBSheet} isReceiver={isReceiver} />
        </>
      )}
    </View>
  );
}
OrderInfo.defaultProps = {
  isReceiver: true,
  completed: false,
};
export default OrderInfo;
