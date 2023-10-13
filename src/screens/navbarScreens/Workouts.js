import { View, Text, StyleSheet, StatusBar } from "react-native";

import GymBotNavigation from "../../components/navbar";
import ViewWorkouts from "../../components/Workout/WorkoutContainer";
import ScreenHeader from "../../components/ScreenHeader";

export default function Workouts({ navigation }) {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <ScreenHeader title="Workouts" />

      <ViewWorkouts navigation={navigation} />

      <StatusBar barStyle="dark-content" />

      <GymBotNavigation navigation={navigation} currentScreen={"Workouts"} />
    </View>
  );
}
