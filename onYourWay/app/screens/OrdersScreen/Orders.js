import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { useQuery } from "react-query";
import Toast from "react-native-root-toast";

import DropDownCity from "../../components/DropDownCity/DropDownCity";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";
import NewOrderInfo from "../../components/NewOrderInfo/NewOrderInfo";
import main from "../../config/main";
import styles from "./styles";

function Orders({ navigation }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [loadData, setLoadData] = useState(false);
  const [refreshing, setRefreshing] = useState(true);
  const [load, setLoad] = useState(false);
  const isFocused = useIsFocused();
  
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
        data={loadData ? result.data.data : []}
        refreshing={refreshing}
        onRefresh={() => {
          setLoadData(false);
          refetch();
        }}
        renderItem={({ item, index, separators }) => {
          return (
            <NewOrderInfo
              key={item.id}
              id={item.id}
              userName={user.name}
              userImg={{ uri: main.baseLink + user.avatar }}
              from={item.from}
              to={item.to}
              pay={item.pay}
              orderImg1={{ uri: main.baseLink + item.main_image }}
              orderImg2={{ uri: main.baseLink + item.image1 }}
              orderImg3={{ uri: main.baseLink + item.image2 }}
              orderDescription={item.description}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

export default Orders;
