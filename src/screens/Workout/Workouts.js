import { View, StatusBar } from "react-native";

import WorkoutScreen from "../../components/Workout/.Box";
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

      <WorkoutScreen navigation={navigation} />

      <StatusBar barStyle="dark-content" />

    </View>
  );
}
