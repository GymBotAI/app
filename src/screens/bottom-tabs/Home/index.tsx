import type { NavigationScreens } from "$types/navigation";

import { StatusBar, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./MainScreen/HomeContainer";
import Settings from "./Settings";

const Stack = createNativeStackNavigator<NavigationScreens>();

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
