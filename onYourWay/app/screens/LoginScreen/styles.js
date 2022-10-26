import { Platform, StyleSheet, StatusBar } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
  mainView: {
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});
