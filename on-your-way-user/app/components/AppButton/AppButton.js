import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

function AppButton({ value, style, onPress }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
