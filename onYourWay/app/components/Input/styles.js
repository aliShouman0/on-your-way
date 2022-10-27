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
    width: "90%",
    textAlign: "left",
    marginBottom:4,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 5,
    width: "90%",
    height: 55,
    padding: "4%",
    margin: 8,
    fontSize: 15,
  },
});
