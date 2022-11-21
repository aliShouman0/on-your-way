import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { useMutation, useQuery } from "react-query";
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
  const [search, setSearch] = useState(false);
  const isFocused = useIsFocused();
  const {
    isLoading,
    data: result,
    isError,
    error,
    refetch,
  } = useQuery("getAllOrders", main.getAllOrders, {
    refetchOnMount: "always",
    retryOnMount: true,
    enabled: false,
  });

  const {
    mutate,
    isError: searchIsError,
    isLoading: searchLoad,
    error: searchError,
    data: searchResult,
  } = useMutation(main.searchOrders);

  useEffect(() => {
    if (isFocused) {
      setSearch(false);
      setLoadData(false);
      refetch();
    }
  }, [isFocused]);

  useEffect(() => {
    setSearch(false);
    setLoadData(false);
    const searchData = new FormData();
    if (from || to) {
      if (from) {
        searchData.append("from", from);
      }
      if (to) {
        searchData.append("to", to);
      }
      mutate(searchData);
    }
  }, [from, to]);

  useEffect(() => {
    setLoadData(false);
    if (searchResult && searchResult.status === 200) {
      if (searchResult.data.status === 1) { 
        setSearch(true);
        setLoadData(true);
      }
    }
    setRefreshing(false);
    if (
      searchIsError ||
      searchError ||
      (searchResult &&
        (searchResult === 401 || searchResult === 400 || searchResult === 500))
    ) {
      Toast.show("Some Thing went Wrong 😔", {
        duration: Toast.durations.LONG,
      });

      setLoadData(false);
      setSearch(false);
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
      console.log(searchError);
    }
  }, [searchResult, searchIsError]);

  useEffect(() => {
    setLoadData(false);
    if (result && result.status === 200) {
      if (result.data.status === 1) {
        setLoadData(true);
        setRefreshing(false);
      }
    }
    setRefreshing(false);
    if (
      isError ||
      searchLoad ||
      (result && (result === 401 || result === 400 || result === 500))
    ) {
      Toast.show("Some Thing went Wrong 😔", {
        duration: Toast.durations.LONG,
      });
      setSearch(false);
      setLoadData(false); 
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
      console.log(error);
    }
  }, [result, isError]);

  if (isLoading || load || !loadData) {
    return <Loading />;
  }

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
        data={
          loadData
            ? search && searchResult&&searchResult.data
              ? searchResult.data.data
              : result.data
              ? result.data.data
              : []
            : []
        }
        refreshing={refreshing}
        onRefresh={() => {
          setLoadData(false);
          setSearch(false);
          setFrom("");
          setTo("");
          refetch();
        }}
        renderItem={({ item, index, separators }) => {
          const user = item.user_info;
          return (
            <NewOrderInfo
              key={item.id}
              id={item.id}
              userName={user.name}
              userImg={{ uri: main.baseLink + user.avatar }}
              userPhone={user.phone}
              from={item.from}
              to={item.to}
              pay={item.pay}
              orderImg1={{ uri: main.baseLink + item.main_image }}
              orderImg2={{ uri: main.baseLink + item.image1 }}
              orderImg3={{ uri: main.baseLink + item.image2 }}
              orderDescription={item.description}
              setIsLoading={setLoad}
              navigation={navigation}
              refetch={() => {
                setLoadData(false);
                setSearch(false);
                setFrom("");
                setTo("");
                refetch();
              }}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

export default Orders;
