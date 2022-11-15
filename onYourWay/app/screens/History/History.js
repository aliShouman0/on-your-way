import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { useQuery } from "react-query";
import Toast from "react-native-root-toast";

import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/Navbar/Navbar";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import styles from "./styles";
import main from "../../config/main";

function History({ navigation }) {
  const [loadData, setLoadData] = useState(false);
  const [refreshing, setRefreshing] = useState(true);
  const [load, setLoad] = useState(false);
  const isFocused = useIsFocused();
  const {
    isLoading,
    data: result,
    isError,
    error,
    refetch,
  } = useQuery("myCompleteOrder", main.getEndedOrder, {
    refetchOnMount: "always",
    retryOnMount: true,
    enabled: false,
  });

 

  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"History"} navigation={navigation} />
      <FlatList
        style={styles.flatList}
        keyExtractor={(data) => data.id.toString()}
        data={loadData ? result.data.data : []}
        refreshing={refreshing}
        onRefresh={() => {
          setLoadData(false);
          refetch();
        }}
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
