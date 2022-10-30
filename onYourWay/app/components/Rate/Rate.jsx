import React from "react";
import { Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

function Rate({ rate }) {
  const getStar = () => {
    const rows = [];
    for (let i = 0; i < rate; i++) {
      rows.push(
        <Entypo key={i} name="star" size={18} style={styles.fillIcon} />
      );
    }
    for (let i = 0; i < 5 - rate; i++) {
      rows.push(
        <Entypo key={i + rate} name="star" size={18} style={styles.icon} />
      );
    }
    return rows;
  };
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Rated:</Text>
      {getStar()}
    </View>
  );
}

export default Rate;
