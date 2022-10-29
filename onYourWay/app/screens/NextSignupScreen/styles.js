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
  view: {
    marginTop: 20,
  },
  text: {
    color: colors.white,
    fontSize: text.sizeMid,
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
    width: "100%",
    height: 200,
    backgroundColor: colors.white,
    borderRadius: 150,
  },
  idContainer: {
    marginTop: 20,
    width: "100%",
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 50,
  },
  imgId: {
    width: 150,
    height: 150,
    backgroundColor: colors.white,
    borderRadius: 15,
  },
  sheetView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
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
