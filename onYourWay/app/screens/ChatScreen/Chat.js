import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import * as SecureStore from "expo-secure-store";

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
    if (users && userImages)
      for (let i = 0; i < users.length; i++) {
        renderedUser.push({
          id: i,
          name: users[i].name,
          userImg: require("../../assets/user1.jpg"),
          date: users[i].date,
          lastMessage: "....",
          user: users[i],
        });
      }
    setData(renderedUser);
    setIsLoading(false);
  }, [userImages]);

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
