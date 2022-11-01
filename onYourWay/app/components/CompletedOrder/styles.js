import { Dimensions, StyleSheet } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

export default StyleSheet.create({
  draggableIcon: {
    backgroundColor: colors.secondary,
  },
  container: {
    backgroundColor: colors.primary,
    padding: 15,
  },
  view: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  textTitle: {
    fontSize: text.sizeBig,
    fontWeightL: "500",
    color: colors.white,
    marginVertical: 15,
  },
  input: {
    marginBottom: 15,
    textAlignVertical: "top",
    height: 90,
  },
  rateView: {
    marginBottom: 15,
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
  },
  rate: {
    fontSize: text.sizeMid,
    marginRight: 20,
  },
});
