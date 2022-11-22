import React, { useState } from "react";
import { SafeAreaView, View, TouchableOpacity, ScrollView } from "react-native";
import AppButton from "../../components/AppButton/AppButton";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";
import Input from "../../components/Input/Input";
import Navbar from "../../components/Navbar/Navbar";

function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const todyDate=new Date()
  // test if email match
  function emailMatch(em) {
    let pattern = /\w[\w0-9+_.-]*@[a-z0-9]+.\w+/;
    return em.match(pattern) == null ? false : true;
  }

  // test if phone match
  function phoneMatch(phone) {
    let pattern = /^(03|3|70|71|76|78|79|81)[0-9]{6}/;
    return phone.match(pattern) == null ? false : true;
  }

  // validation input and go next
  const next = () => {
    if (!email || !name || !phone || !address || !confirmPass || !password) {
      alert("All inputs are required");
      return;
    }
    if (!emailMatch(email)) {
      alert("Incorrect Email ex@domain.ex");
      return;
    }
    if (!phoneMatch(phone)) {
      alert("Phone Not Match ");
      return;
    }
    if (password != confirmPass) {
      alert("Password Not Match ");
      return;
    }
    if (password.length < 4) {
      alert("Password Must Be More Than 4 Character");
      return;
    }
    navigation.navigate("NextSignupScreen", {
      email,
      name,
      phone,
      address,
      password,
      date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    });
  };


  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"back"} title={"Register"} navigation={navigation} />
      <ScrollView style={styles.scroll}>
        <View style={styles.inputContainer}>
          <Input text="Full Name" value={name} setValue={setName} />
          <TouchableOpacity style={styles.date} onPress={() => setOpen(true)}>
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
            secureTextEntry={true}
            keyboardType="email-address"
          />
          <Input
            text="Phone"
            value={phone}
            placeholder={"ex: 70123456"}
            setValue={setPhone}
            keyboardType="numeric"
          />
          <Input text="Address" value={address} setValue={setAddress} />
          <Input
            text="Password"
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
          />
          <Input
            text="Confirm Password"
            value={confirmPass}
            setValue={setConfirmPass}
            secureTextEntry={true}
          />
          <AppButton value={"Next"} onPress={next} />
        </View>

        {open&&(
          <DateTimePicker
            value={date}
            mode="date"
            onChange={(e, date) => {
              setDate(date);
              setOpen(false);
            }}
            maximumDate={new Date(`${todyDate.getMonth()+1}/${todyDate.getDate()}/${todyDate.getFullYear()-18}`)}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Signup;
