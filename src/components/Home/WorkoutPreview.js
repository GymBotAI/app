import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DailyWorkout = ({ }) => {
  return (
    <TouchableOpacity style={styles.container}>

        <View style={styles.topSection}>
            <Text style={styles.workoutOfTheDayText}>Workout of the Day</Text>
        </View>
          <Text style={styles.workoutTitle}>Placeholder</Text>
        <Text style={styles.clickToSeeMore}>Click to see more</Text>
      
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    left: "10%",
    width: "80%",
    height: 120,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  topSection: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "left",
    backgroundColor: "#349beb",
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 15,
  },
  workoutOfTheDayText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  clickToSeeMore: {
    fontSize: 14,
    color: "#555",
  },
});

export default DailyWorkout;
