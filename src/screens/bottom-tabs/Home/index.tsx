import type { NavigationScreens } from "$types/navigation";

import { StatusBar, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./Home";
import Settings from "./Settings";

const Stack = createNativeStackNavigator<NavigationScreens>();

// This is the navigation stack for the Home tab
// It's a stack navigator because we want to be
// able to navigate to the Settings screen

export default function Workouts({ navigation }) {
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <Stack.Navigator
        screenOptions={{
          animation: "none",
          headerShown: false, // Hide the default header
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>

      <StatusBar barStyle="dark-content" />
    </View>
  );
}
