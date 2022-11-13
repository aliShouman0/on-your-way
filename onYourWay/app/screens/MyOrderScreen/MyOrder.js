import React, { useEffect, useState } from "react";
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
  const [refreshing, setRefreshing] = useState(true);
  const [load, setLoad] = useState(false);
  const {
    isLoading,
    data: result,
    isError,
    error,
    refetch,
  } = useQuery("myOrder", main.getMyOrder, {
    refetchOnMount: "always",
    retryOnMount: true,
  });
  useEffect(() => {
    if (result && result.status === 200) {
      if (result.data.status === 1) {
        main.save("access_token", result.data.refresh);
        setLoadData(true);
      }
    }
    setRefreshing(false);
  }, [result]);

  if (isLoading || load) {
    return <Loading />;
  }
  if (isError || (result && (result === 401 || result === 400))) {
    Toast.show("Some Thing went Wrong 😔", {
      duration: Toast.durations.LONG,
    });
    console.log(error);
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
        data={loadData ? result.data.data : []}
        onRefresh={() => {
          setLoadData(false);
          refetch();
        }}
        refreshing={refreshing}
        renderItem={({ item, index, separators }) => {
          userImg = item.picked ? item.pickup_info.picker_info.avatar : "";
          picker = item.picked ? item.pickup_info.picker_info : "";
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
              picked={item.picked}
              pickerName={item.picked ? picker.name : ""}
              pickerEmail={item.picked ? picker.email : ""}
              pickerPhone={item.picked ? picker.phone : ""}
              pickerAddress={item.picked ? picker.address : ""}
              pickerRate={item.picked ? picker.rate : ""}
              setIsLoading={setLoad}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

export default MyOrder;
