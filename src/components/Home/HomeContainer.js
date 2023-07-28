import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import WorkoutList from "./WorkoutList"; // Import the WorkoutList component or replace with your actual implementation
import WorkoutPreview from "./WorkoutPreview"

import { NameVal } from "../Settings/NameOption";

const Dashboard = ({ navigation }) => {
  const [userName, setUserName] = useState(NameVal);

  const handleTalkToGymBot = () => {
    navigation.navigate("Chat");
    console.log("Talk to GymBot");
  };

  const handleWorkoutPreview = () => {
    console.log("Workout Preview");
  };

  // Function to handle the "Your Workouts" button press (replace with your logic)
  const handleYourWorkouts = () => {
    navigation.navigate("Workouts");
    console.log("Your Workouts");
  };

  // Function to handle the "View All" button press (replace with your logic)
  const handleViewAllWorkouts = () => {
    console.log("View All Workouts");
  };

  return (
    <View style={styles.container}>
      {/* Blue Light Blue Gradient */}
      <LinearGradient colors={["#65a6ff", "#b8d1fc"]} style={styles.gradientContainer}>
        {/* Hello, User and GymBot */}
        <View style={styles.topSection}>
          <Text style={styles.greetings}>Hello, {userName}</Text>
          {/* <AntDesign name="home" size={24} color="white" /> */}
        </View>

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleTalkToGymBot}>
            <Text style={styles.buttonText}>Talk to GymBot</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleYourWorkouts}>
            <Text style={styles.buttonText}>Your Workouts</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      
      <View style={styles.workoutPreview} onPress={handleWorkoutPreview}>
          <WorkoutPreview/>
      </View>

      {/* Explore Workouts */}
      <View style={styles.exploreSection}>
        <WorkoutList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  workoutPreview: {
  position: "absolute",
  bottom: 260,
  width: '100%',
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
  elevation: 2,
},
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  gradientContainer: {
    flex: 0.8, // Adjust the height of the gradient container here
    paddingVertical: 10, // Decrease the padding to make the gradient smaller vertically
    paddingHorizontal: 15,
    marginBottom: 80,
  },
  topSection: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greetings: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: "30%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#65a6ff",
  },
  exploreSection: {
    flex: 0.5, // Adjust the height of the explore section here
    paddingHorizontal: 15,
  },
  exploreTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  viewAllButton: {
    marginTop: 10,
    backgroundColor: "#ff8282",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  viewAllButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});

export default Dashboard;
