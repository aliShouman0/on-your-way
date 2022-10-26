import React, { useState } from "react";
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

function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false); 

  return (
    <SafeAreaView style={styles.mainView}>
      <Image
        resizeMode="contain"
        style={styles.logo}
        source={require("../../assets/logo-white.png")}
      />
      <ScrollView style={styles.scroll}>
        <View style={styles.inputContainer}>
          <TextInput
            clearButtonMode="always"
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TouchableOpacity style={styles.date} onPress={() => setOpen(true)}>
            <TextInput
              style={styles.input}
              placeholder="Date Of Birth"
              value={date.toDateString()}
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
          <TextInput
            clearButtonMode="always"
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            clearButtonMode="always"
            style={styles.input}
            placeholder="Phone"
            keyboardType="numeric"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
          <TextInput
            clearButtonMode="always"
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            clearButtonMode="always"
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPass}
            onChangeText={(text) => setconfirmPass(text)}
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
