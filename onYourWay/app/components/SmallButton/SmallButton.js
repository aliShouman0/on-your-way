import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

function SmallButton({ value, onPress, color }) {
  return (
    <TouchableOpacity
      style={[styles.button, color && { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
}

export default SmallButton;
