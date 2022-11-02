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
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  container: {
    borderRadius: 10,
    borderColor: colors.lightWhite,
    borderStyle: "solid",
    borderWidth: 0.5,
    width: "30%",
    height: 55,
    padding: 5,
  },
  key: {
    fontSize: text.sizeSmall,
    fontWeight: "100",
    color: colors.white,
  },
  value: {
    fontSize: text.sizeMid,
    fontWeight: "400",
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
