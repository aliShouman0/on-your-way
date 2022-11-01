import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";

function Navbar({ type, title, navigation, rightIcon, onRightIconPress }) {
  const handelEvent = () => {
    if (type === "main") {
      navigation.openDrawer();
    }
    if (type === "register") {
      navigation.pop();
    }
  };
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={handelEvent}>
        {type === "register" && (
          <Ionicons name="arrow-back" size={35} style={styles.icon} />
        )}
        {type === "main" && (
          <FontAwesome5 name="bars" size={35} style={styles.icon} />
        )}
      </TouchableOpacity>

      <Text
        style={[
          styles.title,
          rightIcon
            ? ""
            : {
                marginRight: 50,
              },
        ]}
      >
        {title}
      </Text>
      {rightIcon && (
        <TouchableOpacity style={styles.rightIcon} onPress={onRightIconPress}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
}
Navbar.defaultProps = {
  rightIcon: false,
};
export default Navbar;
