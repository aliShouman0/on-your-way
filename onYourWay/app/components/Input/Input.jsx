import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";

function Input({
  keyboardType,
  text,
  secureTextEntry,
  value,
  setValue,
  placeholder,
  contextMenuHidden,
  editable,
  multiline,
  style,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        clearButtonMode="always"
        keyboardType={keyboardType}
        style={[styles.input, style]}
        placeholder={placeholder ? placeholder : text}
        value={value}
        onChangeText={(text) => setValue(text)}
        editable={editable}
        contextMenuHidden={contextMenuHidden}
        multiline={multiline}

      />
    </View>
  );
}

Input.defaultProps = {
  keyboardType: "default",
  text: "",
  secureTextEntry: false,
  value: "",
  editable: true,
  contextMenuHidden: false,
  multiline: false,
  style: "",
};

export default Input;
