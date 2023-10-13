import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/navbarScreens/Home";
import Plans from "./src/navbarScreens/Plans";
import Workouts from "./src/navbarScreens/Workouts";
import Food from "./src/navbarScreens/Food";
import Chat from "./src/navbarScreens/Chat";

import Account from "./src/screens/StartUp";
import Login from "./src/screens/LogIn";
import Settings from "./src/screens/Settings";
import SignUp from "./src/screens/SignUp";
import DesignWorkout from "./src/screens/DesignWorkout";

import type { NavigationScreens } from "./src/types/navigation";

const Stack = createNativeStackNavigator<NavigationScreens>();

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
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Plans" component={Plans} />
        <Stack.Screen name="Workouts" component={Workouts} />
        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="Chat" component={Chat} />

        <Stack.Screen name="DesignWorkout" component={DesignWorkout} />

        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
