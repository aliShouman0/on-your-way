import React, { useState } from "react";
import { SafeAreaView, ScrollView, Image } from "react-native";
import styles from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import Rate from "../../components/Rate/Rate";
import text from "../../config/text";

function Account({ navigation }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState(new Date());
  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"Account"} navigation={navigation} />
      <Image
        resizeMode="contain"
        source={require("../../assets/user1.jpg")}
        style={styles.userImg}
      />
      <Rate rate={3} size={30} styleText={{ fontSize: text.sizeMid }} />
      <ScrollView style={styles.scroll}></ScrollView>
    </SafeAreaView>
  );
}

export default Account;
