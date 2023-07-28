import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DailyWorkout = ({ }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.previewContainer}>
        <Text style={styles.previewText}>Today's Workout Preview:</Text>
        <Text style={styles.workoutTitle}>Workout of the Day</Text>
        {/* <Text style={styles.exerciseText}>{workout.exercises[0]}</Text>
        <Text style={styles.exerciseText}>{workout.exercises[1]}</Text>
        <Text style={styles.exerciseText}>{workout.exercises[2]}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    left: "10%",
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  previewContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  previewText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  exerciseText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 3,
  },
});

export default DailyWorkout;
