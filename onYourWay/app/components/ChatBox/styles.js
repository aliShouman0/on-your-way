import { Platform, StatusBar, StyleSheet } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

export default StyleSheet.create({
  mainView: {
    flexDirection: "row",
    backgroundColor: colors.darker,
    marginHorizontal: 20,
    marginVertical:10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  }
});
