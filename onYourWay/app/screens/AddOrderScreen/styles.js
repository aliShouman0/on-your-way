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
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 50,
    marginBottom: 20,
    zIndex: 10,
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
    borderWidth: 0,
  },
  dropDownContainerStyle: {
    backgroundColor: colors.white,
    color: colors.black,
    borderRadius: 0,
    width: "100%",
    borderWidth: 0, 
  },
  containerStyle: {
    alignItems: "center",
    backgroundColor: "transparent",
    color: colors.white,
    width: "45%",
    borderWidth: 0,
  },
  input: {
    marginVertical: 20,
  },
  icon: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: colors.white,
    borderRadius: 100,
  },
  
});
