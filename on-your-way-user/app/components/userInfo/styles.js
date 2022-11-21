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
    padding: 8,
    alignItems: "center",
  },
  userInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  userImg: {
    width: 130,
    height: 130,
    borderRadius: 75,
    marginBottom: 30,
  },
  userDetails: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 3,
  },
});
