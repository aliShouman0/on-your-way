import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import AppButton from "../../components/AppButton/AppButton";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

import Input from "../../components/Input/Input";
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
      <ScrollView style={styles.scroll}>
        <View style={styles.inputContainer}>
          <Input
            text="Full Name"
            value={name}
            setValue={setName}
            editable={false}
            contextMenuHidden={true}
          />
          <TouchableOpacity style={styles.date}>
            <Input
              text="Date Of Birth"
              value={date.toDateString()}
              placeholder={date.toDateString()}
              editable={false}
              contextMenuHidden={true}
            />
            <MaterialIcons
              style={styles.datePic}
              name="date-range"
              size={35}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Account;
