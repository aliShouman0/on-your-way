import React, { useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import ChatBox from "../../components/ChatBox/ChatBox";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles";

 
function Chat({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(testing);

  const refresh = () => {
    setData([
      {
        id: "id3",
        name: "Refresh Done",
        userImg: require("../../assets/user1.jpg"),
        date: "07/8/2022",
        lastMessage: "Refresh Done",
      },
    ]);
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"Chat"} navigation={navigation} />
      <FlatList
        style={styles.flatList}
        keyExtractor={(data) => data.id.toString()}
        data={data}
        refreshing={refreshing}
        onRefresh={refresh}
        renderItem={({ item, index, separators }) => (
          <ChatBox
            name={item.name}
            userImg={item.userImg}
            lastMessage={item.lastMessage}
            date={item.date}
            navigation={navigation}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default Chat;
