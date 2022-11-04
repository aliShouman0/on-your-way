import React from "react";
import { SafeAreaView } from "react-native";

import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles";

function Orders({ navigation }) {
  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"Register"} navigation={navigation} />
    </SafeAreaView>
  );
}

export default Orders;
