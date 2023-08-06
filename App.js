import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/navbarScreens/Home";
import Chat from "./src/navbarScreens/Chat";
import Account from "./src/screens/Account";
import Settings from "./src/screens/Settings";
import Workouts from "./src/navbarScreens/Workouts";
import SignUp from "./src/screens/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide the default header
          animation: "none",
        }}
      >
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Workouts" component={Workouts} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
