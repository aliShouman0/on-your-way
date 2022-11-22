import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

export default StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "90%",
    marginVertical: 10,
  },
  text: {
    color: colors.black,
    fontSize: text.sizeMid,
    textTransform: "uppercase",
    fontWeight: "900",
  },
});
