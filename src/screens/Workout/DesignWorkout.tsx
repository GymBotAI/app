import { View, StatusBar } from "react-native";

import DesignWorkoutContainer from "../../components/Workout/DesignWorkout/DesignWorkoutContainer";
import GymBotNavigation from "../../components/NavBar";
import ScreenHeader from "../../components/ScreenHeader";

export default function DesignWorkout({ navigation }) {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <ScreenHeader title="Workouts" />

      <DesignWorkoutContainer navigation={navigation} />

      <StatusBar barStyle="dark-content" />

      <GymBotNavigation navigation={navigation} currentScreen={"Workouts"} />
    </View>
  );
}