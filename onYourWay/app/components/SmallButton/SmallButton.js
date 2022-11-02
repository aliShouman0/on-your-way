import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

function SmallButton({ value, onPress, color, textStyle }) {
  return (
    <TouchableOpacity
      style={[styles.button, color && { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{value}</Text>
    </TouchableOpacity>
  );
}

export default SmallButton;
