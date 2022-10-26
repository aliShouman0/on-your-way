import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

function AppButton({ value, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;
