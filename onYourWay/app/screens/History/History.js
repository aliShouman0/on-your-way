import React, { useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import DropDownCity from "../../components/DropDownCity/DropDownCity";
import Navbar from "../../components/Navbar/Navbar";
import OrderInfo from "../../components/OrderInfo/OrderInfo"; 
import styles from "./styles";

 

function History({ navigation }) {
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
        orderImg: require("../../assets/keyboard.jpg"),
        orderDescription: "Refresh Done",
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"History"} navigation={navigation} />
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
          <OrderInfo
            key={item.id}
            id={item.id}
            userName={item.userName}
            userImg={item.userImg}
            from={item.from}
            to={item.to}
            pay={item.pay}
            orderImg={item.orderImg}
            orderDescription={item.orderDescription}
            completed={true}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default History;
