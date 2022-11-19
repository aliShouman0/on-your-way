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
    marginTop: 50,
    marginBottom: 20,
    marginVertical: 15,
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
  searchTextInputStyle: {
    borderColor: colors.black ,
    color: colors.black,
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
  imgContainer: {
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 50,
  },
  img: {
    width: 100,
    height: 100,
    backgroundColor: colors.white,
    borderRadius: 15,
  },
  iconSheet: {
    color: colors.primary,
    textAlign: "center",
  },
  sheetText: {
    color: colors.primary,
    fontSize: text.sizeSmall,
    marginVertical: 20,
  },
});
