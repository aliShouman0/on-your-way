import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./app/screens/LoginScreen/Login";
import NextSignupScreen from "./app/screens/NextSignupScreen/NextSignupScreen";
import Signup from "./app/screens/SignupScreen/Signup";
import DrawerNavigator from "./app/components/DrawerNavigator/DrawerNavigator";

import { createDrawerNavigator } from "@react-navigation/drawer";

export default function App() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}} initialRouteName={"Login"}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NextSignupScreen"
          component={NextSignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
