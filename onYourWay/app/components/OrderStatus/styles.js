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
  }
});
