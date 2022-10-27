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
    width: 150,
    height: 150,
    marginTop: 20,
  },
  scroll: {
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    width: "100%",
    flex: 2,
    alignItems: "center",
    marginTop: 50,
  },
  date: {
    width: "100%",
    alignItems: "center",
  },
  datePic: {
    position: "absolute",
    right: 40,
    top: 35,
  },
});
