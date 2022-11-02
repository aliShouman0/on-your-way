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
    marginVertical: 5,
  },
  orderStatus: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "32%",
    marginVertical: 15,
  },
  lightInput: {
    fontWeight: "300",
    fontSize: text.sizeSmall,
  },
  time: {
    width: "100%",
  },
  statusContainer: {
    width: "90%",
    height: "100%",
    marginBottom: 44,
    marginHorizontal: 8,
  },
  statusText: {
    fontSize: text.sizeSmall,
    color: colors.white,
    fontWeight: "100", 
    
  },
  text: {
    color: colors.white,
    fontWeight: "100",
  },
  textStyle: {
    color: colors.white,
    fontWeight: "300",
    fontSize: text.sizeSmall,
  },
  style: {
    backgroundColor: "transparent",
    color: colors.white,
    borderColor: "white",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: colors.lightWhite,
    height: 55, 
  },
  dropDownContainerStyle: {
    backgroundColor: colors.dark,
    borderWidth: 1,
    borderColor: colors.lightWhite,
    borderRadius: 0,
    width: "90%",
  },
  containerStyle: {
    height: 50,
    width: "100%",
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "transparent",
    color: colors.white,
  },
  btnContainer: {
    width: "100%",
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
