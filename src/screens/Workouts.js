import { View, Text, StyleSheet } from "react-native";

import GymBotNavigation from "../components/navbar";
import ViewWorkouts from "../components/ViewWorkouts";
import ScreenHeader from "../components/ScreenHeader";

export default function Workouts({ navigation }) {

  return (
    
      <View
        style={{
          height: "100%",
          width: "100%",
        }}
      >

      <ScreenHeader
        title="Workouts"
      />
      
      <ViewWorkouts/>
      
      <GymBotNavigation
      navigation={navigation}
      />
      </View>
  );
}