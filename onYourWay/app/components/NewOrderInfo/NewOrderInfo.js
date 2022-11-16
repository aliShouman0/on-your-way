import React from "react";
import { Image, Text, View } from "react-native";
import firebaseHelper from "../../config/firebaseHelper";

import colors from "../../config/colors";
import InfoBoxes from "../InfoBoxes/InfoBoxes";
import SmallButton from "../SmallButton/SmallButton";
import styles from "./styles";
import { useMutation } from "react-query";
import main from "../../config/main";
import controller from "./controller";

function NewOrderInfo({
  id,
  userName,
  userImg,
  userPhone,
  from,
  to,
  pay,
  orderDescription,
  orderImg1,
  orderImg2,
  orderImg3,
  setIsLoading,
  navigation,
  refetch,
}) {
  const {
    mutate,
    isError: pickupIsError,
    isLoading: pickupLoad,
    error: pickupError,
    data: pickupResult,
  } = useMutation(main.addOrUpdatePickup);

  controller.addPickupResultUseEffect(
    setIsLoading,
    pickupIsError,
    pickupResult,
    pickupError,
    refetch
  );

  const pick = () => {
    const data = new FormData();
    data.append("order_id", id);
    mutate(data);
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.userInfo}>
        <Image resizeMode="contain" source={userImg} style={styles.userImg} />
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <InfoBoxes from={from} to={to} pay={pay} />

      <View style={styles.imgContainer}>
        <Image
          resizeMode="stretch"
          source={orderImg1}
          style={styles.orderImg}
        />
        <Image
          resizeMode="stretch"
          source={orderImg2}
          style={styles.orderImg}
        />
        <Image
          resizeMode="stretch"
          source={orderImg3}
          style={styles.orderImg}
        />
      </View>
      <Text style={styles.description}>{orderDescription}</Text>

      <View style={styles.btnContainer}>
        <SmallButton
          value={"CHAT"}
          onPress={() => {
            firebaseHelper.chat(
              setIsLoading,
              userPhone,
              userName,
              userImg,
              navigation
            );
          }}
          buttonStyle={styles.buttonStyle}
        />
        <SmallButton
          value={"Pick"}
          color={colors.secondary}
          onPress={pick}
          buttonStyle={styles.buttonStyle}
        />
      </View>
    </View>
  );
}
export default NewOrderInfo;
