import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useQuery } from "react-query";
import Toast from "react-native-root-toast";
import { useIsFocused } from "@react-navigation/native";

import OrderInfo from "../../components/OrderInfo/OrderInfo";
import Navbar from "../../components/Navbar/Navbar";
import Loading from "../../components/Loading/Loading";
import colors from "../../config/colors";
import styles from "./styles";
import main from "../../config/main";

function MyOrder({ navigation }) {
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
  } = useQuery("myOrder", main.getMyOrder, {
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
    if (
      isError ||
      (result && (result === 401 ||  result === 500))
    ) {
      Toast.show("Some Thing went Wrong 😔", {
        duration: Toast.durations.LONG,
      });
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
      setLoadData(false);
      console.log(error);
    }
    setRefreshing(false);
  }, [result]);

  if (isLoading || load || !loadData) {
    return <Loading />;
  }

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
        data={loadData && result.data ? result.data.data : []}
        onRefresh={() => {
          setLoadData(false);
          refetch();
        }}
        refreshing={refreshing}
        renderItem={({ item, index, separators }) => {
          const picker = item.picked ? item.pickup_info.picker_info : "";
          return (
            <OrderInfo
              key={item.index}
              id={item.id}
              userImg={
                item.picked ? { uri: main.baseLink + picker.avatar } : ""
              }
              from={item.from}
              to={item.to}
              pay={item.pay}
              orderImg={{ uri: main.baseLink + item.main_image }}
              orderDescription={item.description}
              navigation={navigation}
              picked={item.picked}
              userName={item.picked ? picker.name : ""}
              userEmail={item.picked ? picker.email : ""}
              userPhone={item.picked ? picker.phone : ""}
              userAddress={item.picked ? picker.address : ""}
              userRate={item.picked ? picker.rate : ""}
              userOrderCount={item.picked ? picker.order_count : ""}
              pickupId={item.picked ? item.pickup_info.id : ""}
              liveLocation={item.picked ? item.pickup_info.live_location : ""}
              setIsLoading={setLoad}
              setRefreshing={refetch}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

export default MyOrder;
