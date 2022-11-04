import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 
function ChatStackNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={"Chat"}>
   
    </Stack.Navigator>
  );
}

export default ChatStackNavigator;
