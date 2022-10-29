import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";

const CustomDrawer = (props) => {
  return (
    <View style={styles.mainView}>
      <DrawerContentScrollView {...props}>
        <View style={styles.view}>
          <Image
            resizeMode="contain"
            source={require("../../assets/user.png")}
            style={styles.userImg}
          />
          <Text style={styles.text}>User Name</Text>
        </View>
        <View style={styles.drawerListWrapper}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
