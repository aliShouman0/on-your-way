import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

export default StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "80%",
    marginVertical: 10,
  },
  text: {
    color: colors.black,
    fontSize: text.sizeMid,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
