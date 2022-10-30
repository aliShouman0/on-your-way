import { Dimensions, StyleSheet } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

const windowHeight = Dimensions.get("window").height;
export default StyleSheet.create({
  sheetView: { backgroundColor: colors.primary },
  draggableIcon: {
    backgroundColor: colors.secondary,
  },
  container: { backgroundColor: colors.primary },
});
