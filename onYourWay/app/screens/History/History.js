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

  useEffect(() => {
    if (isFocused) {
      setLoadData(false);
      refetch();
    }
  }, [isFocused]);

  useEffect(() => {
    setLoadData(false);
    if (result && result.status === 200) {
      if (result.data.status === 1) { 
        setLoadData(true);
      }
    }
    setRefreshing(false);
  }, [result]);

  if (isLoading || load || !loadData) {
    return <Loading />;
  }

  if (
    isError ||
    (result && (result === 401 || result === 400 || result === 500))
  ) {
    Toast.show("Some Thing went Wrong 😔", {
      duration: Toast.durations.LONG,
    });

    setLoadData(false);
    console.log(error);
  }

  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"History"} navigation={navigation} />
      <FlatList
        style={styles.flatList}
        keyExtractor={(data) => data.id.toString()}
        data={loadData &&result.data ? result.data.data : []}
        refreshing={refreshing}
        onRefresh={() => {
          setLoadData(false);
          refetch();
        }}
        renderItem={({ item, index, separators }) => {
          user = item.user_info;
          canceled = item.ended_pickup_info.canceled;
          return (
            <OrderInfo
              key={item.id}
              id={item.id}
              userName={user.name}
              userImg={{ uri: main.baseLink + user.avatar }}
              from={item.from}
              to={item.to}
              pay={item.pay}
              orderImg={{ uri: main.baseLink + item.main_image }}
              orderDescription={item.description}
              completed={true}
              orderRated={
                !canceled
                  ? item.ended_pickup_info.completed_pickup_info.receiver_rated
                  : 0
              }
              canceled={canceled}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

export default History;
