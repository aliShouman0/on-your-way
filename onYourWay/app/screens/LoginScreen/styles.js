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
    width: 300,
    height: 300,
    flex: 1.95,
  },
  inputContainer: {
    width: "100%",
    flex: 2,
    alignItems: "center",
    marginTop: 50,
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
  signup: {
    color: colors.white,
    fontSize: text.sizeMid,
    marginTop: 20,
  },
});
