import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

export default StyleSheet.create({
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
  }
});
