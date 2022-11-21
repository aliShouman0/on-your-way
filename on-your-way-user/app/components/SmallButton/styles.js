import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

export default StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    borderRadius: 0,
    width: "28%",
    height: 38,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.black,
    fontSize: text.sizeSmall,
    textTransform: "capitalize",
    fontWeight: "500",
  },
});
