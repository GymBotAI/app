import React from "react";
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import TalkToGymBotSection from "./TalkToGymBot"; // Import your existing component
import WorkoutStats from "./WorkoutStats"; // Import the new component
import WorkoutList from "./WorkoutList";

import {Name} from "../SignUp/Name"

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Text style={styles.greetingText}>Hello, John{Name}</Text>
        <TouchableOpacity onPress={() => console.log("Home Icon pressed!")}>
          <FontAwesome5 name="home" size={28} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 30, width: "90%", alignSelf: "center" }}>
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
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 60,
  },
  greetingText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
});

export default HomeScreen;
