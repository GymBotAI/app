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
        <FontAwesome5 name="calendar" size={30} color="black" />
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.circleContainer}>
          <ProgressCircle
            percent={69}
            radius={60}
            borderWidth={8}
            color="#08c9ff" // Light blue for progress circle
            shadowColor="#cccccc"
            bgColor="white" // Light blue background
          >
          <FontAwesome5 name="dumbbell" size={15} color="#08c9ff" style={styles.icon} />
            <Text style={{
    fontSize: 36,
    fontWeight: "bold",
    color: "#454545",
    alignSelf: "center",
    marginBottom: -2,}}>{completedWorkouts}</Text>
          </ProgressCircle>
          <Text style={styles.goalText}>Workouts</Text>
        </View>

        <View style={styles.circleContainer}>
          <ProgressCircle
            percent={86} // Use a different percentage for the second circle if needed
            radius={60}
            borderWidth={8}
            color="#dade8e" // Light blue for progress circle
            shadowColor="#cccccc"
            bgColor="white" // Light blue background
          >
          <FontAwesome5 name="shoe-prints" size={15} color="#dade8e" style={styles.icon} />
            <Text style={{
    fontSize: 36,
    fontWeight: "bold",
    color: "#454545",
    alignSelf: "center",
    marginBottom: -2,}}>{totalWorkouts}</Text>
          </ProgressCircle>
          <Text style={styles.goalText}>Runs</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a8eeff", // Light blue background
    height: 300,
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
  },
  topSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  statsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "black",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  circleContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    paddingVertical: 15,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5, // For Android shadow
  },
  goalText: {
    marginTop: 10,
    fontSize: 14,
    color: "black",
    textAlign: "center",
    marginBottom: 5,
  },
  icon: {
    marginBottom: 5,
  },
  percentageText: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginBottom: 5,
  },
});

export default WorkoutStats;
