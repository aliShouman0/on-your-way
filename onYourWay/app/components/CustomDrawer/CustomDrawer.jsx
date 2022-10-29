import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import styles from "./styles";

const CustomDrawer = (props) => {
  return (
    <View style={styles.mainView}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerListWrapper}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
