import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

function ChatBox({
  name,
  userImg,
  lastMessage,
  date,
  navigation,
  myData,
  user,
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("InChat", {
          userName: name,
          userImg,
          myData,
          selectedUser: user,
        });
      }}
    >
      <View style={styles.mainView}>
        <Image resizeMode="contain" source={userImg} style={styles.userImg} />
        <View style={styles.text}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ChatBox;
