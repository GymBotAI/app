import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import ProgressCircle from "react-native-progress-circle";

const WorkoutStats = ({ completedWorkouts, totalWorkouts, goalPercentage }) => {
  const getCurrentMonth = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const currentDate = new Date();
    return months[currentDate.getMonth()];
  };

  // Get the screen width
  const screenWidth = Dimensions.get("window").width;

  // Set the percentage of the screen width for the progress circle radius (adjust as needed)
  const circleRadiusPercentage = 0.16; // 40% of the screen width

  // Calculate the actual radius based on the screen width and percentage
  const circleRadius = screenWidth * circleRadiusPercentage;
  // const circleRadius = 60;

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.statsText}>{getCurrentMonth()} Activity</Text>
        <FontAwesome5 name="calendar" size={30} color="#F5F5F5" />
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.circleContainer}>
          <ProgressCircle
            percent={69}
            radius={circleRadius}
            borderWidth={8}
            color="#8ede99" // Light blue for progress circle
            shadowColor="#cccccc"
            bgColor="#F5F5F5" // Light blue background
          >
            <FontAwesome5
              name="dumbbell"
              size={15}
              color="#8ede99"
              style={styles.icon}
            />
            <Text
              style={{
                fontSize: 36,
                fontWeight: "bold",
                color: "#2e2e2e",
                alignSelf: "center",
                marginBottom: -2,
              }}
            >
              {completedWorkouts}
            </Text>
          </ProgressCircle>
          <Text style={styles.goalText}>Workouts</Text>
        </View>

        <View style={styles.circleContainer}>
          <ProgressCircle
            percent={86} // Use a different percentage for the second circle if needed
            radius={circleRadius}
            borderWidth={8}
            color="#8ed9de" // Light blue for progress circle
            shadowColor="#cccccc"
            bgColor="#F5F5F5" // Light blue background
          >
            <FontAwesome5
              name="shoe-prints"
              size={15}
              color="#8ed9de"
              style={styles.icon}
            />
            <Text
              style={{
                fontSize: 36,
                fontWeight: "bold",
                color: "#2e2e2e",
                alignSelf: "center",
                marginBottom: -2,
              }}
            >
              {totalWorkouts}
            </Text>
          </ProgressCircle>
          <Text style={styles.goalText}>Runs</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#227df2", // Light blue background
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
    fontWeight: "bold",
    color: "#F5F5F5",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  circleContainer: {
    width: "47%",
    backgroundColor: "#F5F5F5",
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
    color: "#2e2e2e",
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
