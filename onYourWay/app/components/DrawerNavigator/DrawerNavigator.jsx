import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome } from "@expo/vector-icons";

import MyOrder from "../../screens/MyOrderScreen/MyOrder";
import colors from "../../config/colors";
import text from "../../config/text";
import styles from "./styles";

function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="MyOrder"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.secondary,
        drawerActiveTintColor: colors.black,
        drawerInactiveTintColor: "white",
        drawerInactiveBackgroundColor: "transparent",
        drawerLabelStyle: styles.drawerLabelStyle,
        drawerStyle: styles.drawerStyle,
      }}
    >
      <Drawer.Screen
        name="MyOrder"
        component={MyOrder}
        options={{
          title: "My Order",
          drawerIcon: ({ focused, color, size }) => (
            <FontAwesome name="cart-plus" size={size * 1.5} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
