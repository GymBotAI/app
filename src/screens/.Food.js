import { View, Text, StyleSheet, StatusBar } from "react-native";

import ScreenHeader from "../components/ScreenHeader";

import FoodContainer from "../components/Food/FoodContainer";

export default function Workouts({ navigation }) {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <ScreenHeader title="Food" />

      <FoodContainer />

      <StatusBar barStyle="dark-content" />

    </View>
  );
}
