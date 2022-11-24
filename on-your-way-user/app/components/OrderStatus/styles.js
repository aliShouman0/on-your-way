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
    padding: 10,
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
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: "48%",
    width: "95%",
    marginVertical: 5,
    borderRadius:10
  },
  orderStatus: { 
    flexDirection: "row",
    justifyContent: "center", 
    width: "32%",
    marginVertical: 15,
  },
  lightInput: {
    fontWeight: "300",
    fontSize: text.sizeSmall,
    width:"90%"
  },
  time: {
    width: "100%",
  },
  statusContainer: {
    width: "90%", 
    justifyContent: "center",
    marginHorizontal: 8,
  },
  statusText: {
    fontSize: text.sizeSmall,
    color: colors.white,
    fontWeight: "100",
    marginBottom: 4,
  },
  text: {
    color: colors.lightWhite,
    fontWeight: "500",
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
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.lightWhite,
    height: 55,
    marginTop: 8,
    marginBottom: 8,
  },
  dropDownContainerStyle: {
    backgroundColor: colors.dark,
    borderWidth: 1,
    borderColor: colors.lightWhite,
    borderRadius: 0,
  },
  save: {
    backgroundColor: colors.secondary,
    borderRadius: 0,
    padding: 0,
    width: "93%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  containerStyle: {
    color: colors.white,
  },
  btnContainer: {
    width: "100%",
    marginTop: 10,
    marginBottom: 15, 
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
});
