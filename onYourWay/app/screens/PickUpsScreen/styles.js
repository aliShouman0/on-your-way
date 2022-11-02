import { Platform, StatusBar, StyleSheet } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

export default StyleSheet.create({
  mainView: {
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    height: "100%",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 5,
    marginBottom: 20, flex:1
  },
});
