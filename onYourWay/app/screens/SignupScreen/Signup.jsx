import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AppButton from "../../components/AppButton/AppButton";
import styles from "./styles";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialIcons } from "@expo/vector-icons";

import Input from "../../components/Input/Input";

function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [cont, setCont] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(!show);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [show]);

  return (
    <SafeAreaView style={styles.mainView}>
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
            secureTextEntry={true}
            keyboardType="numeric"
          />
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
            onPress={() => console.log(email, password)}
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
