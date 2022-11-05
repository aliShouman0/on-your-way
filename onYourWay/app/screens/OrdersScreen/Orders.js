import React, { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";

import DropDownCity from "../../components/DropDownCity/DropDownCity";
import Navbar from "../../components/Navbar/Navbar";
import NewOrderInfo from "../../components/NewOrderInfo/NewOrderInfo";
import styles from "./styles";

 
function Orders({ navigation }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(testing);
 
  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"Orders"} navigation={navigation} />
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
        renderItem={({ item, index, separators }) => (
          <NewOrderInfo
            key={item.id}
            id={item.id}
            userName={item.userName}
            userImg={item.userImg}
            from={item.from}
            to={item.to}
            pay={item.pay}
            orderImg1={item.orderImg1}
            orderImg2={item.orderImg2}
            orderImg3={item.orderImg3}
            orderDescription={item.orderDescription}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default Orders;
