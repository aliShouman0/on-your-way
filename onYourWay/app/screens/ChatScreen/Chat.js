import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import firebaseHelper from "../../config/firebaseHelper";
import ChatBox from "../../components/ChatBox/ChatBox";
import Navbar from "../../components/Navbar/Navbar";
import Loading from "../../components/Loading/Loading";
import styles from "./styles";

function Chat({ navigation, phone = 71993980 }) {
  const [data, setData] = useState(renderedUser);
  const [users, setUsers] = useState([]);
  const [myData, setMyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const renderedUser = [];
  useEffect(() => {
    setIsLoading(true);
    firebaseHelper.chatLogin(phone, setMyData, setUsers, setIsLoading);
  }, []);

  useEffect(() => {
    if (users)
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
  }, [users]);

  if (isLoading) {
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
