import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome } from "@expo/vector-icons";

import MyOrder from "../../screens/MyOrderScreen/MyOrder";
import colors from "../../config/colors";
import styles from "./styles";
import CustomDrawer from "../CustomDrawer/CustomDrawer";
import AddOrder from "../../screens/AddOrderScreen/AddOrder";

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
              size={size * 1.5}
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
          drawerItemStyle: { height: 0 },
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
