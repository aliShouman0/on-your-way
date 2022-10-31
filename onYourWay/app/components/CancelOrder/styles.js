import { Dimensions, StyleSheet } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

const windowHeight = Dimensions.get("window").height;
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
  textSmall: {
    fontSize: text.sizeSmall,
    fontWeight: "200",
    color: colors.white,
    marginVertical: 10,
  },
  textTitle: {
    fontSize: text.sizeBig,
    fontWeightL: "500",
    color: colors.white,
  },
  input: {
    height: "auto",
    textAlignVertical: "top",
    maxHeight: (windowHeight * 1) / 5,
    minHeight: 80,
  },
  note: {
    fontSize: text.sizeMid,
    fontWeightL: "200",
    color: colors.white,
    width: "90%",
    marginVertical: 20,
  },
});
