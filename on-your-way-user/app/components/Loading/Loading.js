import React from "react";
import { ActivityIndicator, View } from "react-native"; 
import colors from "../../config/colors";
import styles from "./styles";

function Loading() {
  return (
    <View style={styles.view}>
      <ActivityIndicator color={colors.secondary} size="large" />
    </View>
  );
}

export default Loading;
