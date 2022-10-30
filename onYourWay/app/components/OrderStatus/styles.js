import { Platform, StyleSheet, StatusBar } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
  draggableIcon: {
    backgroundColor: colors.secondary,
  },
  container: {
    backgroundColor: colors.primary,
    padding: 15,
  },
  view: {
    backgroundColor: colors.darker,
    flex: 1,
    borderRadius: 10,
  },
});
