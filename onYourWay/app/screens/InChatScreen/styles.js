import { Platform, StatusBar, StyleSheet } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

export default StyleSheet.create({
  mainView: {
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    height: "100%",
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  message: {
    margin: 15,
    flex: 1,
  },
  getMessage: {
    backgroundColor: colors.darker,
    color: colors.white,
    fontSize: text.sizeSmall,
    borderRadius: 10,
    padding: 10,
    maxWidth: "70%",
    minWidth: "30%",
    lineHeight: 20,
    height: "auto",
    marginVertical: 5,
    alignSelf: "flex-start",
  },
  sendMessage: {
    backgroundColor: colors.dark,
    color: colors.white,
    fontSize: text.sizeSmall,
    borderRadius: 10,
    padding: 10,
    maxWidth: "70%",
    minWidth: "30%",
    lineHeight: 20,
    height: "auto",
    marginVertical: 5,
    alignSelf: "flex-end",
  },
});
