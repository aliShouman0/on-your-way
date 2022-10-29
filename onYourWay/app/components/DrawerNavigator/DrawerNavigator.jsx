import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
 
function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="MyOrder"
      screenOptions={{
        headerShown: false, 
      }}
    >
     
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
