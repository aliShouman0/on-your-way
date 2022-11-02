import React, { useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import Navbar from "../../components/Navbar/Navbar";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import { AntDesign } from "@expo/vector-icons"; 
import colors from "../../config/colors";
import styles from "./styles";

 
function MyOrder({ navigation }) {
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
      <Navbar
        type={"main"}
        title={"My Order"}
        navigation={navigation}
        rightIcon={<AntDesign name="plus" size={35} color={colors.white} />}
        onRightIconPress={() => navigation.navigate("AddOrder")}
      />

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
          />
        )}
      />
    </SafeAreaView>
  );
}

export default MyOrder;
