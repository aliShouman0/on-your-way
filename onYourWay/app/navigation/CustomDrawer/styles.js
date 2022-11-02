import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import text from "../../config/text";

export default StyleSheet.create({
  mainView: { flex: 1 },
  view: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  userImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  text: {
    fontSize: text.sizeMid,
    fontWeight: "500",
    color: colors.white,
    marginRight: 20,
  },
  drawerListWrapper: {
    marginTop: 65,
    flex: 1,
  },
  footer: {
    position: "absolute",
    bottom: 5,
    left: 20,
  },
  footerContent: {
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: { color: colors.black, marginRight: 20 },
});
