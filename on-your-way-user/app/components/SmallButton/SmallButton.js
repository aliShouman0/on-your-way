import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

function SmallButton({ value, onPress, buttonStyle, color, textStyle }) {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, color && { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{value}</Text>
    </TouchableOpacity>
  );
}
SmallButton.defaultProps = {
  buttonStyle:"",
  color: "",
};
export default SmallButton;
