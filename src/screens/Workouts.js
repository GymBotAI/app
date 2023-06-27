import { View, Text, StyleSheet } from "react-native";

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

      <ScreenHeader
        title="Workouts"
      />
      
      
      <GymBotNavigation
      navigation={navigation}
      />
      </View>
  );
}