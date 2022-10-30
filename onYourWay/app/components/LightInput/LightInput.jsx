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
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>{text}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        clearButtonMode="always"
        keyboardType={keyboardType}
        style={styles.input}
        placeholder={placeholder ? placeholder : text}
        value={value}
        onChangeText={(text) => setValue(text)}
        editable={editable}
        contextMenuHidden={contextMenuHidden}
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
};

export default LightInput;
