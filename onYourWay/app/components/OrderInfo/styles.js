import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

export default StyleSheet.create({
  mainView: {
    width: "90%",
    height: 500,
    backgroundColor: colors.darker,
    borderRadius: 15,
    marginVertical: 20,
    padding: 15,
    flex: 1,
    alignSelf: "center",
  },
  userInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
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
  orderDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },

});
