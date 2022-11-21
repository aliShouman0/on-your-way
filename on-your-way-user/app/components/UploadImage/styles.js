import {   StyleSheet } from "react-native";
import colors from "../../config/colors"; 

export default StyleSheet.create({
  sheetView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  iconSheet: {
    color: colors.primary,
    textAlign: "center",
  },
});
