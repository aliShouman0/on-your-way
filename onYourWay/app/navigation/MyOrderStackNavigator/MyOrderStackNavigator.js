import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyOrder from "../../screens/MyOrderScreen/MyOrder";
import AddOrder from "../../screens/AddOrderScreen/AddOrder";

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
    </Stack.Navigator>
  );
}

export default MyOrderStackNavigator;
