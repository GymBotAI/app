import type { NavigationScreens } from "$types/navigation";

import { StatusBar, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CompleteWorkout from "./CompleteWorkout";
import DesignManual from "./DesignManual";
import Workout from "./MainScreen";

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
        <Stack.Screen name="Workout" component={Workout} />
        <Stack.Screen name="DesignManual" component={DesignWorkout} />
        <Stack.Screen name="CompleteWorkout" component={CompleteWorkout} />
      </Stack.Navigator>

      <StatusBar barStyle="dark-content" />
    </View>
  );
}
