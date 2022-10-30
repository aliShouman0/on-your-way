import { Platform, StyleSheet, StatusBar } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

export default StyleSheet.create({
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: text.sizeSmall,
    width: "93%",
    textAlign: "left",
    marginBottom: 4,
    fontWeight: "400",
  },
  input: {
    backgroundColor: "transparent",
    color: colors.white,
    borderRadius: 0,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.lightWhite,
    width: "93%",
    height: 55,
    padding: "4%",
    margin: 8,
    fontSize: text.sizeSmall,
    fontWeight: "300",
  },
});
