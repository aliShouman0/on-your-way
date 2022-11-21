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
  },
  drawerListWrapper: {
    marginTop: 65,
    flex: 1,
  },
  footer: {
    width: "100%",
  },
  footerContent: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  footerText: {
    paddingVertical: 20,
    fontSize: text.sizeSmall,
    fontWeight: "500",
    color: colors.white,
  },
  icon: {
    color: colors.black,
    marginRight: 10,
    marginLeft: 20,
    width: 35,
    textAlign: "center",
  },
  active: {
    backgroundColor: colors.secondary,
    color: colors.black,
  },
});
