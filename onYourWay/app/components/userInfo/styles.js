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
  },
  sheetView: {
    backgroundColor: colors.primary,
    flex: 1,
    flexDirection: "row",
  },
  userInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  userImg: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});
