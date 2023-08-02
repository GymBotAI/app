// Example usage
import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import TalkToGymBotSection from "./TalkToGymBot"; // Import your existing component
import WorkoutStats from "./WorkoutStats"; // Import the new component
import WorkoutList from "./WorkoutList";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginTop: 50, width: "90%", alignSelf: "center" }}>
        <WorkoutStats
          completedWorkouts={20}
          totalWorkouts={30}
          goalPercentage={66}
        />
      </View>
      <TalkToGymBotSection />
      <WorkoutList />
      {/* Other components and content go here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default HomeScreen;
