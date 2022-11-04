import React from "react";
import { Image, SafeAreaView, ScrollView, Text } from "react-native";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles";

function InChat({ navigation, route }) {
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
    </SafeAreaView>
  );
}

export default InChat;
