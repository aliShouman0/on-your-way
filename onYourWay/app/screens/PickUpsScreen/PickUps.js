import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useQuery } from "react-query";

import OrderInfo from "../../components/OrderInfo/OrderInfo";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles";
import DropDownCity from "../../components/DropDownCity/DropDownCity";
import Loading from "../../components/Loading/Loading";
import main from "../../config/main";

function PickUps({ navigation }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [loadData, setLoadData] = useState(false);
  const [load, setLoad] = useState(false);
  const isFocused = useIsFocused();
  const {
    isLoading,
    data: result,
    isError,
    error,
    refetch,
  } = useQuery("myOrder", main.getMyPickup, {
    refetchOnMount: "always",
    retryOnMount: true,
    enabled: false,
  });

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
        data={result}
        refreshing={refreshing}
        onRefresh={() => {
          setLoadData(false);
          refetch();
        }}
        renderItem={({ item, index, separators }) => (
          <></>
        )}
      />
    </SafeAreaView>
  );
}

export default PickUps;
