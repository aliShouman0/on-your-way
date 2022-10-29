import React from "react";
import { Text, TouchableOpacity, View } from "react-native"; 
import styles from "./styles";

function Navbar({ type, title, navigation }) {
  return (
    <View style={styles.view}>
     

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default Navbar;
