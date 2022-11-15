import React from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./styles";

function LightInput({
  keyboardType,
  text,
  secureTextEntry,
  value,
  setValue,
  placeholder,
  contextMenuHidden,
  editable,
  style,
  textStyle,
  onFocus,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
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
        onFocus={onFocus}
      />
    </View>
  );
}

LightInput.defaultProps = {
  keyboardType: "default",
  text: "",
  secureTextEntry: false,
  value: "",
  editable: true,
  contextMenuHidden: false,
  textStyle: "",
  style: "",
};

export default LightInput;
