import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
  textStyle: {
    color: colors.white,
    fontWeight: "500",
  },
  style: {
    backgroundColor: colors.dark,
    borderRadius: 5,
    borderWidth: 0,
  },
  dropDownContainerStyle: {
    backgroundColor: colors.dark,
    borderRadius: 0,
    borderWidth: 0,
  },
  containerStyle: {
    width: "35%",
  },
  searchTextInputStyle: {
    borderColor: colors.white,
    color: colors.white,
  },
});
