import { Platform, StyleSheet, StatusBar } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
  mainView: {
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: "center",
    height: "100%",
  },
  flatList: { 
    width: "100%",
    margin: 15,
  },
});
