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
  userImg: {
    marginVertical: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  scroll: {
    width: "100%",
    height: "100%",
  },
  inputContainer: {
    width: "100%",
    flex: 2,
    alignItems: "center",
    marginTop: 15,
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
