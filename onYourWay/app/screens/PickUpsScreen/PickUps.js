import React, { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import OrderInfo from "../../components/OrderInfo/OrderInfo";

import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles";
import DropDownCity from "../../components/DropDownCity/DropDownCity";
 
function PickUps({ navigation }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(testing);
 
  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"Pick Ups"} navigation={navigation} />
      <View style={styles.container}>
        <DropDownCity placeholder={"From"} setValue={setFrom} value={from} />
        <DropDownCity placeholder={"To"} setValue={setTo} value={to} />
      </View>
      <FlatList
        style={styles.flatList}
        keyExtractor={(data) => data.id.toString()}
        data={data}
        refreshing={refreshing}
        onRefresh={refresh}
       
      />
    </SafeAreaView>
  );
}

export default PickUps;
