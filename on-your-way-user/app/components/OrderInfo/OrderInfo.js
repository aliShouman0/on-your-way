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
  pickupId,
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
  userName,
  userEmail,
  userPhone,
  userAddress,
  userRate,
  setIsLoading,
  setRefreshing,
  userOrderCount,
  liveLocation,
  orderRated,
  canceled,
}) {
  const userInfoBSheet = useRef();
  const orderStatusBSheet = useRef();
  
  return (
    <View style={styles.mainView}>
      {(picked === 1 || completed) && (
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
          {!canceled ? (
            <Rate
              rate={orderRated}
              size={25}
              styleText={{ fontSize: text.sizeMid }}
            />
          ) : (
            <Text style={styles.userName}>Canceled</Text>
          )}
        </View>
      ) : (
        <>
          {picked === 1 && (
            <>
              <View style={styles.btnContainer}>
                <SmallButton
                  value={"Info"}
                  onPress={() => userInfoBSheet.current.open()}
                />
                <SmallButton
                  value={"CHAT"}
                  onPress={() =>
                    firebaseHelper.chat(
                      setIsLoading,
                      userPhone,
                      userName,
                      userImg,
                      navigation
                    )
                  }
                />
                <SmallButton
                  value={"STATUS"}
                  color={colors.secondary}
                  onPress={() => orderStatusBSheet.current.open()}
                />
              </View>

              <UserInfo
                refRBSheet={userInfoBSheet}
                userName={userName}
                userEmail={userEmail}
                userPhone={userPhone}
                userAddress={userAddress}
                userImg={userImg}
                userRate={userRate}
                orderCount={userOrderCount}
              />
              <OrderStatus
                refRBSheet={orderStatusBSheet}
                isReceiver={isReceiver}
                navigation={navigation}
                setIsLoading={setIsLoading}
                setRefreshing={setRefreshing}
                liveLocation={liveLocation}
                pickupId={pickupId}
                id={id}
              />
            </>
          )}
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
