import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import MyOrder from "../../screens/MyOrderScreen/MyOrder";
import colors from "../../config/colors";
import styles from "./styles";
import CustomDrawer from "../CustomDrawer/CustomDrawer";
import AddOrder from "../../screens/AddOrderScreen/AddOrder";
import PickUps from "../../screens/PickUpsScreen/PickUps";
import History from "../../screens/History/History";
import ChatStackNavigator from "../ChatStackNavigator/ChatStackNavigator";

function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="MyOrder"
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
        name="MyOrder"
        component={MyOrder}
        options={{
          title: "My Order",
          drawerIcon: ({ focused, color, size }) => (
            <FontAwesome
              name="cart-plus"
              size={35}
              style={{ width: 35 }}
              color={colors.black}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="AddOrder"
        component={AddOrder}
        options={{
          title: "Add Order",
          drawerItemStyle: { display: "none" },
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
              size={35}
              style={{ width: 35, paddingLeft: 10 }}
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
              size={35}
              style={{ width: 35 }}
              color={colors.black}
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
              size={35}
              style={{ width: 35 }}
              color={colors.black}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
