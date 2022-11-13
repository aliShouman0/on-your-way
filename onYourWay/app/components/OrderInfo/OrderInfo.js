import React, { useRef, useState } from "react";
import { Image, Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import Toast from "react-native-root-toast";

import colors from "../../config/colors";
import firebaseHelper from "../../config/firebaseHelper";
import text from "../../config/text";
import InfoBoxes from "../InfoBoxes/InfoBoxes";
import Loading from "../Loading/Loading";
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
  navigation,
  picked,
  pickerName,
  pickerEmail,
  pickerPhone,
  pickerAddress,
  pickerRate,
  setIsLoading
}) {
  const userInfoBSheet = useRef();
  const orderStatusBSheet = useRef(); 
  const chat = async () => {
    setIsLoading(true);
    const user = await firebaseHelper.findUser(pickerPhone);
    const user_info = await SecureStore.getItemAsync("user_info");
    const phone = JSON.parse(user_info).phone;
    const myData = await firebaseHelper.findUser(phone);
    if (user && myData) {
      await firebaseHelper.onAddFriend(pickerPhone, myData, setIsLoading);
      navigation.navigate("InChat", {
        userName: pickerName,
        userImg,
        myData,
        selectedUser: user,
      });
      return;
    }
    setIsLoading(false);
    Toast.show("Some Thing went Wrong 😔", {
      duration: Toast.durations.LONG,
    });
  }; 
  return (
    <View style={styles.mainView}>
      {picked === 1 && (
        <View style={styles.userInfo}>
          <Image resizeMode="contain" source={userImg} style={styles.userImg} />
          <Text style={styles.userName}>{userName}</Text>
        </View>
      )}
      <InfoBoxes from={from} to={to} pay={pay} />
      <Image resizeMode="contain" source={orderImg} style={styles.orderImg} />
      <Text style={styles.description}>{orderDescription}</Text>
      {completed ? (
        <View style={styles.rate}>
          <Rate rate={3} size={25} styleText={{ fontSize: text.sizeMid }} />
        </View>
      ) : (
        <>
          {picked === 1 && (
            <View style={styles.btnContainer}>
              <SmallButton
                value={"Info"}
                onPress={() => userInfoBSheet.current.open()}
              />
              <SmallButton value={"CHAT"} onPress={chat} />
              <SmallButton
                value={"STATUS"}
                color={colors.secondary}
                onPress={() => orderStatusBSheet.current.open()}
              />
            </View>
          )}
          <UserInfo
            refRBSheet={userInfoBSheet}
            pickerName={pickerName}
            pickerEmail={pickerEmail}
            pickerPhone={pickerPhone}
            pickerAddress={pickerAddress}
            userImg={userImg}
            pickerRate={pickerRate}
          />
          <OrderStatus
            refRBSheet={orderStatusBSheet}
            isReceiver={isReceiver}
            navigation={navigation}
            id={id}
          />
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
