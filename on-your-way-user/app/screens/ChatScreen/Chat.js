import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import * as SecureStore from "expo-secure-store";
import Toast from "react-native-root-toast";

import firebaseHelper from "../../config/firebaseHelper";
import ChatBox from "../../components/ChatBox/ChatBox";
import Navbar from "../../components/Navbar/Navbar";
import Loading from "../../components/Loading/Loading";
import styles from "./styles";
import main from "../../config/main";
import { useMutation } from "react-query";

function Chat({ navigation }) {
  const [data, setData] = useState(renderedUser);
  const [users, setUsers] = useState([]);
  const [myData, setMyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userImages, setUserImages] = useState([]);
  const renderedUser = [];
  const {
    mutate,
    isLoading: getUserImagesIsLoad,
    data: result,
    isError,
    error,
  } = useMutation(main.getUserImages);
  const extractor = (data, key) => {
    return data.map(function (element) {
      return element[key];
    });
  };

  useEffect(() => {
    setIsLoading(true);
    const getPhone = async () => {
      const user_info = await SecureStore.getItemAsync("user_info");
      const myPhone = JSON.parse(user_info).phone;
      return myPhone;
    };
    const chatLogin = async () => {
      const myPhone = await getPhone();
      await firebaseHelper.chatLogin(
        myPhone,
        setMyData,
        setUsers,
        setIsLoading
      );
    };
    chatLogin();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (users && userImages) {
      for (let i = 0; i < users.length; i++) {
        const image = userImages.find((o) => o.phone === users[i].phone);
        renderedUser.push({
          id: i,
          name: users[i].name,
          userImg: {
            uri: main.baseLink + (image ? image.avatar : ""),
          },
          date: users[i].date,
          lastMessage: "....",
          user: users[i],
        });
      }
      setData(renderedUser);
      setIsLoading(false);
    }
  }, [userImages]);

  useEffect(() => {
    if (users) {
      setIsLoading(true);
      const phones = extractor(users, "phone");
      const data = new FormData();
      data.append("phones", JSON.stringify(phones));
      mutate(data);
    }
  }, [users]);

  useEffect(() => {
    if (
      isError ||
      (result &&
        (result === 401 || result === 400 || result === 0 || result === 500))
    ) {
      Toast.show("Some Thing went Wrong  ", {
        duration: Toast.durations.LONG,
      });
      console.log(error);
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    }

    if (result && result.status === 200) {
      if (result.data.status === 1) {
        setUserImages(result.data.data);
      }
    }
  }, [result]);

  if (isLoading || getUserImagesIsLoad) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"Chat"} navigation={navigation} />
      <FlatList
        style={styles.flatList}
        keyExtractor={(data) => data.id.toString()}
        data={data}
        renderItem={({ item, index, separators }) => (
          <ChatBox
            name={item.name}
            userImg={item.userImg}
            lastMessage={item.lastMessage}
            date={item.date}
            navigation={navigation}
            myData={myData}
            user={item.user}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default Chat;
