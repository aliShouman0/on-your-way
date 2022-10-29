import { Platform, StyleSheet, StatusBar } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

export default StyleSheet.create({
  mainView: {
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: "center",
  },
  view: {
    marginTop: 20,
  },
  text: {
    color: colors.white,
    fontSize: text.sizeMid,
    marginVertical: 20,
  },
});
