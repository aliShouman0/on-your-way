import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

export default StyleSheet.create({
  mainView: {
    width: "90%",
    height: 420,
    backgroundColor: colors.darker,
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    alignSelf: "center",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  userImg: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  userName: {
    marginLeft: 10,
    fontSize: text.sizeMid,
    color: colors.white,
  },
  orderImg: {
    width: "30%",
    height: "90%",
    borderRadius: 10,
    marginTop: 12,
  },
});
