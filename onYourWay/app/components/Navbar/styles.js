import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

export default StyleSheet.create({
  view: {
    flexDirection: "row",
    height: 65,
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.dark,
  },
  icon: {
    color: colors.white,
    marginLeft: 15,
    textAlign: "left",
  },
  title: {
    flex: 1,
    color: colors.white,
    fontSize: text.sizeMid,
    textAlign: "center",
  },
  rightIcon: {
    marginRight: 15,
  },
});
