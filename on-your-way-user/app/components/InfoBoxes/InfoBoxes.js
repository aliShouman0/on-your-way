import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

function InfoBoxes({from,to,pay}) {
  return (
    <View style={styles.orderDetails}>
      <View style={styles.container}>
        <Text style={styles.key}>From</Text>
        <Text style={styles.value}>{from}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.key}>To</Text>
        <Text style={styles.value}>{to}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.key}>Pay</Text>
        <Text style={styles.value}>{pay}</Text>
      </View>
    </View>
  );
}

export default InfoBoxes;
