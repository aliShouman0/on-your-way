import React, { useState } from "react";
import { SafeAreaView, View, TouchableOpacity, ScrollView } from "react-native";
import AppButton from "../../components/AppButton/AppButton";
import styles from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialIcons } from "@expo/vector-icons";

import Input from "../../components/Input/Input";
import Navbar from "../../components/Navbar/Navbar";

function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"register"} title={"Register"} navigation={navigation} />
      <ScrollView style={styles.scroll}>
        <View style={styles.inputContainer}>
          <Input text="Full Name" value={name} setValue={setName} />
          <TouchableOpacity style={styles.date} onPress={() => setOpen(true)}>
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
            setValue={setconfirmPass}
            secureTextEntry={true}
          />
          <AppButton
            value={"Next"}
            onPress={() => navigation.navigate("NextSignupScreen")}
          />
        </View>

        {open && (
          <DateTimePicker
            value={date}
            mode="date"
            onChange={(e, date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Signup;
