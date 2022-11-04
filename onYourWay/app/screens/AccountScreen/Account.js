import React from "react";
import { SafeAreaView } from "react-native";

import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles";

function Account({ navigation }) {
  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"Account"} navigation={navigation} />
    </SafeAreaView>
  );
}

export default Account;
