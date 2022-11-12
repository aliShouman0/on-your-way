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
    width: "100%",
    borderRadius: 10,
    height: "35%",
    marginTop: 12,
  },
  description: {
    marginTop: 12,
    borderRadius: 10,
    borderColor: colors.lightWhite,
    borderStyle: "solid",
    borderWidth: 0.5,
    width: "100%",
    padding: 15,
    fontSize: text.sizeMid,
    fontWeight: "400",
    color: colors.white,
    flex: 1,
  },
  btnContainer: {
    width: "100%",
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rate: {
    marginTop: 12,
  },
});
