import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./app/screens/LoginScreen/Login";
import NextSignupScreen from "./app/screens/NextSignupScreen/NextSignupScreen";
import Signup from "./app/screens/SignupScreen/Signup";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
