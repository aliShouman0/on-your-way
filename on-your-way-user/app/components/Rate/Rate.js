import React from "react";
import { Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

function Rate({ rate, text,styleText, size }) {
  const getStar = () => {
    const rows = [];
    for (let i = 0; i < rate; i++) {
      rows.push(
        <Entypo
          key={i}
          name="star"
          size={size != -1 ? size : 18}
          style={styles.fillIcon}
        />
      );
    }
    for (let i = 0; i < 5 - rate; i++) {
      rows.push(
        <Entypo
          key={i + rate}
          name="star"
          size={size != -1 ? size : 18}
          style={styles.icon}
        />
      );
    }
    return rows;
  };
  return (
    <View style={styles.view}>
      <Text style={text?[styles.text, styleText]:{display:"none"}}>{text}</Text>
      {getStar()}
    </View>
  );
}
Rate.defaultProps = {
  styleText: "",
  size: -1,
};
export default Rate;
