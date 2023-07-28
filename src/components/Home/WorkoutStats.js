import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import ProgressCircle from "react-native-progress-circle";

const WorkoutStats = ({ completedWorkouts, totalWorkouts, goalPercentage }) => {
  const getCurrentMonth = () => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const currentDate = new Date();
    return months[currentDate.getMonth()];
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.statsText}>{getCurrentMonth()} Activity</Text>
        <FontAwesome5 name="calendar" size={30} color="white" />
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.circleContainer}>
          <ProgressCircle
            percent={22}
            radius={60}
            borderWidth={8}
            color="white" // Light blue for progress circle
            shadowColor="#8f8f8f"
            bgColor="#1678e0" // Light blue background
          >
            <Text style={styles.number}>{completedWorkouts}</Text>
            <Text style={{fontSize: 14, color: 'white', marginTop: -5,}}>Remaining</Text>
          </ProgressCircle>
          <Text style={styles.goalText}>Workouts</Text>
        </View>

        <View style={styles.circleContainer}>
          <ProgressCircle
            percent={36} // Use a different percentage for the second circle if needed
            radius={60}
            borderWidth={8}
            color="white" // Light blue for progress circle
            shadowColor="#8f8f8f"
            bgColor="#1678e0" // Light blue background
          >
            <Text style={styles.number}>{totalWorkouts}</Text>
            <Text style={{fontSize: 14, color: 'white', marginTop: -5,}}>Remaining</Text>
          </ProgressCircle>
          <Text style={styles.goalText}>Goal</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1678e0", // Light blue background
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  number: {
    marginTop: -5,
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    marginBottom: 5,
  },
  statsText: {
    fontSize: 16,
    color: "white",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  circleContainer: {
    alignItems: "center",
  },
  goalText: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginTop: 5,
  },
  percentageText: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginBottom: 5,
  },
});

export default WorkoutStats;
