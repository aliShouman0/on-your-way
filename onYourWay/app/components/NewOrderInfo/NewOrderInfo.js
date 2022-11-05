import React from "react";
import { Image, Text, View } from "react-native";
 
import InfoBoxes from "../InfoBoxes/InfoBoxes"; 
import styles from "./styles";

function NewOrderInfo({
  id,
  userName,
  userImg,
  from,
  to,
  pay,  
}) {
  return (
    <View style={styles.mainView}>
      <View style={styles.userInfo}>
        <Image resizeMode="contain" source={userImg} style={styles.userImg} />
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <InfoBoxes from={from} to={to} pay={pay} /> 
    </View>
  );
}
export default NewOrderInfo;
