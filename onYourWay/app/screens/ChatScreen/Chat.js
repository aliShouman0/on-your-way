import React from "react";
import { SafeAreaView } from "react-native";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles";

function Chat({ navigation }) {
  return (
    <SafeAreaView style={styles.mainView}>
      <Navbar type={"main"} title={"Add Order"} navigation={navigation} />
    </SafeAreaView>
  );
}

export default Chat;
