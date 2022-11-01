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
});
