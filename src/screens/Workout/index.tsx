import { View, StatusBar } from "react-native";

import ScreenHeader from "../../components/ScreenHeader";
import Workout from "./Main Screen";
import DesignWorkout from "./DesignWorkout";
import CompleteWorkout from "./CompleteWorkout/CompleteDesignContainer";

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

          <Stack.Screen name="Workout" component={Workout}/>
          <Stack.Screen name="DesignWorkout" component={DesignWorkout}/>
          <Stack.Screen name="CompleteWorkout" component={CompleteWorkout}/>

        </Stack.Navigator>

      <StatusBar barStyle="dark-content" />

    </View>
  );
}
