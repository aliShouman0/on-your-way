import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";

import colors from "../../config/colors";
import styles from "./styles";
import CustomDrawer from "../CustomDrawer/CustomDrawer";
import PickUps from "../../screens/PickUpsScreen/PickUps";
import Orders from "../../screens/OrdersScreen/Orders";
import History from "../../screens/History/History";
import ChatStackNavigator from "../ChatStackNavigator/ChatStackNavigator";
import MyOrderStackNavigator from "../MyOrderStackNavigator/MyOrderStackNavigator";
import Account from "../../screens/AccountScreen/Account";

function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="MyOrderStackNavigator"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.secondary,
        drawerActiveTintColor: colors.black,
        drawerInactiveTintColor: "white",
        drawerInactiveBackgroundColor: "transparent",
        drawerLabelStyle: styles.drawerLabelStyle,
        drawerStyle: styles.drawerStyle,
        drawerItemStyle: styles.drawerItemStyle,
        swipeEdgeWidth: 150,
      }}
    >
      <Drawer.Screen
        name="MyOrderStackNavigator"
        component={MyOrderStackNavigator}
        options={{
          title: "My Order",
          drawerIcon: ({ focused, color, size }) => (
            <FontAwesome
              name="cart-plus"
              size={30}
              style={styles.icon}
              color={colors.black}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="PickUps"
        component={PickUps}
        options={{
          title: "Pick Ups",
          drawerIcon: ({ focused, color, size }) => (
            <FontAwesome
              name="level-up"
              size={30}
              style={styles.icon}
              color={colors.black}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="History"
        component={History}
        options={{
          title: "History",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="timer-sand"
              size={30}
              style={styles.icon}
              color={colors.black}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={Orders}
        options={{
          title: "Orders",
          drawerIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name="box-open"
              size={20}
              color={colors.black}
              style={styles.icon}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="ChatStackNavigator"
        component={ChatStackNavigator}
        options={{
          title: "Chat",
          drawerIcon: ({ focused, color, size }) => (
            <Entypo
              name="chat"
              size={25}
              style={styles.icon}
              color={colors.black}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={Account}
        options={{
          drawerItemStyle: { height: 0, display: "none" },
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
