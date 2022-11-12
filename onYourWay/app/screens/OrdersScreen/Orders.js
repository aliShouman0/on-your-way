import React, { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";

import DropDownCity from "../../components/DropDownCity/DropDownCity";
import Navbar from "../../components/Navbar/Navbar";
import NewOrderInfo from "../../components/NewOrderInfo/NewOrderInfo";
import styles from "./styles";

const testing = [
  {
    id: "id1",
    userName: "Ali Alrida Shouman",
    userImg: require("../../assets/user1.jpg"),
    from: "Beirut",
    to: "Byblos",
    pay: "145000L.L",
    orderImg1: require("../../assets/keyboard.jpg"),
    orderImg2: require("../../assets/keyboard.jpg"),
    orderImg3: require("../../assets/keyboard.jpg"),
    orderDescription: "keyboard and mouse ",
  },
];

function Orders({ navigation }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(testing);

  const refresh = () => {
    setData([
      {
        id: "id3",
        userName: "Refresh Done",
        userImg: require("../../assets/user1.jpg"),
        from: "Beirut",
        to: "Tripoli",
        pay: "745000L.L",
        orderImg1: require("../../assets/keyboard.jpg"),
        orderImg2: require("../../assets/keyboard.jpg"),
        orderImg3: require("../../assets/keyboard.jpg"),
        orderDescription: "Refresh Done",
      },
    ]);
  };
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
