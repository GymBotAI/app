import { View, Text, StyleSheet, StatusBar } from "react-native";

import GymBotNavigation from "../components/navbar";
import ScreenHeader from "../components/ScreenHeader";

export default function Workouts({ navigation }) {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <ScreenHeader title="Food" />

      <StatusBar barStyle="dark-content" />

      <GymBotNavigation navigation={navigation} currentScreen={"Food"} />
    </View>
  );
}
