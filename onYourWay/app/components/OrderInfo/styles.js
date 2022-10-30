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
  container: {
    borderRadius: 15,
    borderColor: colors.lightWhite,
    color: colors.white,
    borderStyle: "solid",
    borderWidth: 1,
    width: "30%",
    height: 60,
    padding: 7,
  },
  key: {
    fontSize: text.sizeSmall,
    fontWeight: "300",
    color: colors.white,
  },
  value: {
    fontSize: text.sizeMid,
    fontWeight: "500",
    color: colors.white,
  },
  orderImg: {
    width: "100%",
    borderRadius: 15,
    height: "35%",
    marginTop: 15,
  },
  description: {
    marginTop: 15,
    borderRadius: 15,
    borderColor: colors.lightWhite,
    color: colors.white,
    borderStyle: "solid",
    borderWidth: 1,
    width: "100%",
    padding: 15,
    fontSize: text.sizeMid,
  },
  btnContainer: {
    width: "100%",
    marginTop: 15,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
