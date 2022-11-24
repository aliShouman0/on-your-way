import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Chat from "../../screens/ChatScreen/Chat";
import InChat from "../../screens/InChatScreen/InChat";

function ChatStackNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{}} initialRouteName={"Chat"}>
      <Stack.Screen
        name="Chat"
        component={Chat}
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

export default ChatStackNavigator;
