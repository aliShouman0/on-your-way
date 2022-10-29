import React from "react";
import { SafeAreaView } from "react-native";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles";

function MyOrder({ navigation }) {
  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"My Order"} navigation={navigation} />
    </SafeAreaView>
  );
}

export default MyOrder;
