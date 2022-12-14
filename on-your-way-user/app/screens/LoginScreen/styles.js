import { Platform, StyleSheet, StatusBar } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

export default StyleSheet.create({
  mainView: {
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
    flex: 1.5,
  },
  inputContainer: {
    width: "100%",
    flex: 2,
    alignItems: "center",
    marginTop: 50,
  },
  style: {
    marginTop: 50,
  },
  signup: {
    color: colors.white,
    fontSize: text.sizeSmall,
    marginTop: 5,
    fontWeight: "300",
  },
  register: {
    color: colors.secondary,
    fontSize: text.sizeSmall,
    fontWeight: "500",
  },
});
