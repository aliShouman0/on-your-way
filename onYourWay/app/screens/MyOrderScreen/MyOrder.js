import React, { useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useQuery } from "react-query";
import Toast from "react-native-root-toast";

import OrderInfo from "../../components/OrderInfo/OrderInfo";
import Navbar from "../../components/Navbar/Navbar";
import Loading from "../../components/Loading/Loading";
import colors from "../../config/colors";
import styles from "./styles";
import main from "../../config/main";

function MyOrder({ navigation }) {
  const [loadData, setLoadData] = useState(false);
  const [data, setData] = useState(data);
  const {
    isLoading,
    data: result,
    isError,
    error,
  } = useQuery("myOrder", main.getMyOrder);

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
        data={loadData ? result.data.data : []}
        renderItem={({ item, index, separators }) => {
          return (
            <OrderInfo
              key={item.index}
              id={item.id}
              userName={item.picked ? picker.name : ""}
              userImg={
                item.picked ? { uri: main.baseLink + picker.avatar } : ""
              }
              from={item.from}
              to={item.to}
              pay={item.pay}
              orderImg={{ uri: main.baseLink + item.main_image }}
              orderDescription={item.description}
              navigation={navigation}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

export default MyOrder;
