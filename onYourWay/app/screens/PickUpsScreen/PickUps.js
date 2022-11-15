import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useQuery } from "react-query";
import Toast from "react-native-root-toast";

import OrderInfo from "../../components/OrderInfo/OrderInfo";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles"; 
import Loading from "../../components/Loading/Loading";
import main from "../../config/main";

function PickUps({ navigation }) {
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
  } = useQuery("getPickup", main.getMyPickup, {
    enabled: false,
  });

  useEffect(() => {
    setLoadData(false);
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

  if (
    isError ||
    (result && (result === 401 || result === 400 || result === 500))
  ) {
    Toast.show("Some Thing went Wrong 😔", {
      duration: Toast.durations.LONG,
    });
    console.log(error);
    setLoadData(false);
  }
  if (isLoading || load || !loadData) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"Pick Ups"} navigation={navigation} />
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
          let orderInformation = item.order_info;
          let userInfo = orderInformation.user_info;
          return (
            <OrderInfo
              key={item.index}
              id={orderInformation.id}
              userImg={userInfo.avatar}
              from={orderInformation.from}
              to={orderInformation.to}
              pay={orderInformation.pay}
              orderImg={{ uri: main.baseLink + orderInformation.main_image }}
              orderDescription={orderInformation.description}
              navigation={navigation}
              picked={1}
              userName={userInfo.name}
              userEmail={userInfo.email}
              userPhone={userInfo.phone}
              userAddress={userInfo.address}
              userRate={userInfo.rate}
              userOrderCount={userInfo.order_count}
              pickupId={item.id}
              liveLocation={item.live_location}
              setIsLoading={setLoad}
              setRefreshing={refetch}
              isReceiver={false}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

export default PickUps;
