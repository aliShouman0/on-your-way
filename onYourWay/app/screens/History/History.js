import React, { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";

import DropDownCity from "../../components/DropDownCity/DropDownCity";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles";

function History({ navigation }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"History"} navigation={navigation} />
      <View style={styles.container}>
        <DropDownCity placeholder={"From"} setValue={setFrom} value={from} />
        <DropDownCity placeholder={"To"} setValue={setTo} value={to} />
      </View>
    </SafeAreaView>
  );
}

export default History;
