import { Platform, StatusBar, StyleSheet } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
  mainView: {
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: "center",
    height: "100%",
  },
  mapView: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
