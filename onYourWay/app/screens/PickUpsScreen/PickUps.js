import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";

import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles";
import DropDownCity from "../../components/DropDownCity/DropDownCity";

function PickUps({ navigation }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"Add Order"} navigation={navigation} />
      <View style={styles.container}>
        <DropDownCity placeholder={"From"} setValue={setFrom} value={from} />
        <DropDownCity placeholder={"To"} setValue={setTo} value={to} />
      </View>
    </SafeAreaView>
  );
}

export default PickUps;
