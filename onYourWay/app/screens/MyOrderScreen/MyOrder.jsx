import React, { useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";
import Navbar from "../../components/Navbar/Navbar";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import styles from "./styles";

const testing = [
  {
    id: "id1",
    userName: "userName",
    userImg: require("../../assets/user1.jpg"),
    from: "from",
    to: "to",
    pay: "pay",
    orderImg: require("../../assets/keyboard.jpg"),
    orderDescription: "orderDescription",
  },
  {
    id: "id2",
    userName: "userName",
    userImg: require("../../assets/user1.jpg"),
    from: "from",
    to: "to",
    pay: "pay",
    orderImg: require("../../assets/keyboard.jpg"),
    orderDescription: "orderDescription",
  },
  {
    id: "id3",
    userName: "userName",
    userImg: require("../../assets/user1.jpg"),
    from: "from",
    to: "to",
    pay: "pay",
    orderImg: require("../../assets/keyboard.jpg"),
    orderDescription: "orderDescription",
  },
];

function MyOrder({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(testing);

  const refresh = () => {
    setData([
      {
        id: "id",
        userName: "user Name",
        userImg: require("../../assets/user1.jpg"),
        from: "from",
        to: "to",
        pay: "pay",
        orderImg: require("../../assets/keyboard.jpg"),
        orderDescription: "Refresh Done",
      },
    ]);
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"My Order"} navigation={navigation} />
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
            onInfoPress={() => {}}
            onChatPress={() => {}}
            onStatusPress={() => {}}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default MyOrder;
