import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";

function Navbar({ type, title, navigation }) {
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={() => navigation.pop()}>
        {type === "register" && (
          <Ionicons name="arrow-back" size={35} style={styles.icon} />
        )}
        {type === "main" && (
          <FontAwesome5 name="bars" size={35} style={styles.icon} />
        )}
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default Navbar;
