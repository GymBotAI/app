import { View, StatusBar } from "react-native";

import DesignWorkoutContainer from "../components/Workout/DesignWorkout/DesignWorkoutContainer";
import ScreenHeader from "../components/ScreenHeader";

export default function DesignWorkout() {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <ScreenHeader title="Workouts" />
      <DesignWorkoutContainer />
      <StatusBar barStyle="dark-content" />
    </View>
  );
}
