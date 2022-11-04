import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Input from "../../components/Input/Input";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../config/colors";

function InChat({ navigation, route }) {
  const [message, setMessage] = useState("");
  const { userName, userImg } = route.params;
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
      <ScrollView style={styles.message}>
        <Text style={styles.getMessage}>Hi</Text>
        <Text style={styles.sendMessage}>Hello</Text>
        <Text style={styles.getMessage}>
          So what if you pay 10$ and get by 1h
        </Text>
        <Text style={styles.sendMessage}>
          Sounds Good but with live location
        </Text>
        <Text style={styles.getMessage}>Okay Deal</Text>
        <Text style={styles.sendMessage}>Hello</Text>
        <Text style={styles.getMessage}>Hi</Text>
        <Text style={styles.sendMessage}>Hello</Text>
      </ScrollView>

      <View style={styles.messageBox}>
        <Input
          placeholder={"Say Hi!"}
          value={message}
          setValue={setMessage}
          style={styles.input}
          inputContainerStyle={styles.inputContainerStyle}
        />
        <TouchableOpacity style={styles.iconBox}>
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
