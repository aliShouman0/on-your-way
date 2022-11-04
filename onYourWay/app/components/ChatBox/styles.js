import { Platform, StatusBar, StyleSheet } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

export default StyleSheet.create({
  mainView: {
    flexDirection: "row",
    backgroundColor: colors.darker,
    marginHorizontal: 10,
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
  },
  name: {
    color: colors.white,
    fontSize: text.sizeMid,
    fontWeight: "400",
  },
  lastMessage: {
    color: colors.white,
    fontSize: text.sizeSmall,
    fontWeight: "200",
  },
  date: {
    color: colors.white,
    fontSize: text.sizeSmall,
    marginRight: 15,
  },
});
