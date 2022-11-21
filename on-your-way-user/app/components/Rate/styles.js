import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

export default StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: text.sizeSmall,
    color: colors.white,
    marginRight: 10,
  },
  icon: { color: colors.white },
  fillIcon: { color: colors.secondary },
});
