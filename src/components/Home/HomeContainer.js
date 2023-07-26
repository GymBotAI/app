import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import WorkoutList from "./WorkoutList"; // Import the WorkoutList component or replace with your actual implementation

import { NameVal } from "../Settings/NameOption"

const Dashboard = () => {
  // State to store the user's name (replace with actual user data)
  const [userName, setUserName] = useState(NameVal);

  // Function to fetch and set the user's name (replace with your logic)
  useEffect(() => {
    // Simulating an API call to fetch user data
    // Replace this with your actual API call
    setTimeout(() => {
      setUserName("John Doe");
    }, 1000);
  }, []);

  // Function to handle the "Talk to GymBot" button press (replace with your logic)
  const handleTalkToGymBot = () => {
    console.log("Talk to GymBot");
  };

  // Function to handle the "Workout Preview" button press (replace with your logic)
  const handleWorkoutPreview = () => {
    console.log("Workout Preview");
  };

  // Function to handle the "Your Workouts" button press (replace with your logic)
  const handleYourWorkouts = () => {
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
          <AntDesign name="robot" size={24} color="white" />
        </View>

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleTalkToGymBot}>
            <Text style={styles.buttonText}>Talk to GymBot</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleWorkoutPreview}>
            <Text style={styles.buttonText}>Workout Preview</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleYourWorkouts}>
            <Text style={styles.buttonText}>Your Workouts</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Explore Workouts */}
      <View style={styles.exploreSection}>
        {/* Replace the WorkoutList component with your actual implementation */}
        <WorkoutList />
        <TouchableOpacity style={styles.viewAllButton} onPress={handleViewAllWorkouts}>
          <Text style={styles.viewAllButtonText}>View All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  gradientContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
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
    marginTop: 30,
    paddingHorizontal: 15,
  },
  exploreTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  viewAllButton: {
    marginTop: 10,
    backgroundColor: "#65a6ff",
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
