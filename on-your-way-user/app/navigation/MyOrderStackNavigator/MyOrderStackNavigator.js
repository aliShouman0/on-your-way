import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyOrder from "../../screens/MyOrderScreen/MyOrder";
import AddOrder from "../../screens/AddOrderScreen/AddOrder";
import Location from "../../screens/LocationScreen/Location";
import InChat from "../../screens/InChatScreen/InChat";

function MyOrderStackNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={"MyOrder"}>
      <Stack.Screen
        name="MyOrder"
        component={MyOrder}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddOrder"
        component={AddOrder}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Location"
        component={Location}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InChat"
        component={InChat}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyOrderStackNavigator;
 