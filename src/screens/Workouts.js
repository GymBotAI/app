import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ScreenHeader from "../components/ScreenHeader";
import GymBotNavigation from "../components/navbar";

export default function Workouts(navigation) {
  return (
    <View style={styles.container}>

        <ScreenHeader
            title='Workouts'
        />

      <Text style={styles.title}>Saved Workouts</Text>
      {/* Display the saved workouts here */}

        <GymBotNavigation/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
