import { View, StatusBar } from "react-native";

import WorkoutScreen from "./Main Screen/.Box";
import ScreenHeader from "../../components/ScreenHeader";
import DesignWorkout from "./DesignWorkout/.Box";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NavigationScreens } from "../../types/navigation";

const Stack = createNativeStackNavigator<NavigationScreens>();

export default function Workouts({ navigation }) {
  return (
    <View style={{height: "100%", width: "100%"}}>
        <ScreenHeader title="Workouts" />

        <Stack.Navigator
        screenOptions={{
        animation: 'none',
        headerShown: false, // Hide the default header
        }}
        >

          <Stack.Screen name="Workout" component={WorkoutScreen}/>
          <Stack.Screen name="DesignWorkout" component={DesignWorkout}/>

        </Stack.Navigator>

      <StatusBar barStyle="dark-content" />

    </View>
  );
}
