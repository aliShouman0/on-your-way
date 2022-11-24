import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as SecureStore from "expo-secure-store";

import styles from "./styles";
import Input from "../../components/Input/Input";
import Navbar from "../../components/Navbar/Navbar";
import Rate from "../../components/Rate/Rate";
import text from "../../config/text";
import { useIsFocused } from "@react-navigation/native";
import main from "../../config/main";

function Account({ navigation }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [rate, setRate] = useState("");
  const [date, setDate] = useState(new Date());
  const [avatar, setAvatar] = useState("");
  const isFocused = useIsFocused();

  useEffect(() => {
    const getInfo = async () => {
      const info = await SecureStore.getItemAsync("user_info");
      const { email, name, phone, address, birthday, rate, order_count ,avatar} =
        JSON.parse(info);
      setEmail(email);
      setName(name);
      setPhone(phone);
      setAddress(address);
      setDate(new Date(birthday));
      setRate(
        order_count == 0 ? 0 : Math.round(rate / order_count)
      );
      setAvatar(avatar)
    };
    getInfo();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"Account"} navigation={navigation} />
      <Image
        resizeMode="contain"
        source={{ uri: main.baseLink + avatar }}
        style={styles.userImg}
      />
      <Rate rate={rate} size={30} styleText={{ fontSize: text.sizeMid }} />
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
              text="Date of Birth"
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
          <Input
            text="Email"
            value={email}
            setValue={setEmail}
            editable={false}
            contextMenuHidden={true}
          />
          <Input
            text="Phone Number"
            value={phone}
            setValue={setPhone}
            editable={false}
            contextMenuHidden={true}
          />
          <Input
            text="Address"
            value={address}
            setValue={setAddress}
            editable={false}
            contextMenuHidden={true}
          />
          {/* <AppButton value={"EDIT"} onPress={() => {}} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Account;
