import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";

function Input({ keyboardType, text, secureTextEntry, value, setValue }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        secureTextEntry={true}
        clearButtonMode="always"
        keyboardType={keyboardType}
        style={styles.input}
        placeholder={text}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
}



export default Input;
