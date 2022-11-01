import { Platform, StatusBar, StyleSheet } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

export default StyleSheet.create({
  mainView: {
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: "center",
    height: "100%",
  },
  city: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  textStyle: {
    color: colors.black,
    fontWeight: "400",
  },
  style: {
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 5,
    width: "100%",
  },
  dropDownContainerStyle: {
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 0,
    width: "100%",
  },
  containerStyle: {
    alignItems: "center",
    marginTop: 38,
    backgroundColor: "transparent",
    color: colors.white,
    width: "45%",
  }, 
});
