import { Platform, StyleSheet, StatusBar, Dimensions } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  draggableIcon: {
    backgroundColor: colors.secondary,
  },
  container: {
    backgroundColor: colors.primary,
    padding: 15,
  },
  view: {
    backgroundColor: colors.darker,
    flex: 1,
    justifyContent: "center",
    borderRadius: 10,
    alignItems: "center",
  },
  imageContainer: {
    flex: 5,
    width: "100%",
    height: "100%",
    marginVertical: 15,

    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: "48%",
    width: "90%",
    margin: 5,
  },
  orderStatus: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    marginVertical: 15,
  },
  lightInput: {
    fontWeight: "300",
    fontSize: text.sizeSmall,
  },
  time: {
    width: windowWidth / 3.2,
  },
  text: {
    color: colors.white,
    fontWeight: "100", 
  },
  textStyle: {
    color: colors.white,
    fontWeight: "100",
  },
  style: {
    backgroundColor: "transparent",
    color: colors.white,
    borderColor: "white",
    borderRadius: 0,
  },
  dropDownContainerStyle: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderRadius: 0,
  },
  containerStyle: {
    height: 50,
    width: "100%",
    alignItems: "center",
    marginTop: 38,
    backgroundColor: "transparent",
    color: colors.white,
  },
  btnContainer: {
    width: "100%",
    marginVertical: 3,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
