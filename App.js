import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styles from "./src/styles";

import Chat from "./src/screens/Chat";
import Account from "./src/screens/Account";
import Settings from "./src/screens/Settings";
import Workouts from "./src/screens/Workouts";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: false, // Disable screen animations
          headerShown: false, // Hide the default header
        }}
      >
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Workouts" component={Workouts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
