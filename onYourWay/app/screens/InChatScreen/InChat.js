import React, { useState, useEffect, useRef } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Loading from "../../components/Loading/Loading";
import Input from "../../components/Input/Input";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles";
import colors from "../../config/colors";
import firebaseHelper from "../../config/firebaseHelper";

function InChat({ navigation, route }) {
  const [myMessage, setMyMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [load, setLoad] = useState(false);
  const scrollViewRef = useRef();
  const { userName, userImg, myData, selectedUser } = route.params;

  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar
        type={"back"}
        title={userName}
        navigation={navigation}
        rightIcon={
          <Image resizeMode="contain" source={userImg} style={styles.userImg} />
        }
      />
      <ScrollView
        style={styles.message}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      ></ScrollView>

      <View style={styles.messageBox}>
        <Input
          placeholder={"Say Hi!"}
          value={myMessage}
          setValue={setMyMessage}
          style={styles.input}
          inputContainerStyle={styles.inputContainerStyle}
        />
        <TouchableOpacity
          style={styles.iconBox}
          onPress={() => {
            if (myMessage != "")
              firebaseHelper.onSend(
                myMessage,
                selectedUser,
                myData,
                setMessages,
                setMyMessage
              );
          }}
        >
          <Ionicons
            name="send"
            size={50}
            color={colors.dark}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default InChat;
