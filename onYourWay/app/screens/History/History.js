import React from "react";
import { SafeAreaView } from "react-native";

import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles";

function History({navigation}) {
  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"History"} navigation={navigation} />
    </SafeAreaView>
  );
}

export default History;
