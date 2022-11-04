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
    </SafeAreaView>
  );
}

export default InChat;
