import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

export default StyleSheet.create({
  drawerStyle: {
    backgroundColor: colors.dark,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    width: "60%",
    fontsize: text.sizeMid,
  },
  drawerLabelStyle: {
    marginLeft: -20,
    fontSize: text.sizeSmall,
    fontWeight: "500",
    paddingVertical: 5,
  },
  drawerItemStyle: {
    width: "100%",
    borderRadius: 0,
    marginVertical: 10,
  },
  icon: {
    width: 35,
    textAlign: "center",
  },
});
