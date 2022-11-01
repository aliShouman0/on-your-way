import { StyleSheet } from "react-native";
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
  image: {
    width: "100%",
    height: "30%",
    marginTop: 10,
  },
  code: {
    color: colors.white,
    fontSize: text.sizeMid,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: text.sizeSmall,
    marginVertical: 10,
  },
});
