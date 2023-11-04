import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const WorkoutList = ({ navigation }) => {
  const workoutsData = [
    {
      id: 1,
      title: "Full Body Workout",
      exercises: ["Push-ups", "Squats", "Burpees"],
    },
    {
      id: 2,
      title: "Cardio Blast",
      exercises: ["Jumping Jacks", "High Knees", "Mountain Climbers"],
    },
    {
      id: 3,
      title: "Leg Day",
      exercises: ["Lunges", "Deadlifts", "Calf Raises"],
    },
    {
      id: 4,
      title: "Full Body Workout",
      exercises: ["Push-ups", "Squats", "Burpees"],
    },
    {
      id: 5,
      title: "Cardio Blast",
      exercises: ["Jumping Jacks", "High Knees", "Mountain Climbers"],
    },
    {
      id: 6,
      title: "Leg Day",
      exercises: ["Lunges", "Deadlifts", "Calf Raises"],
    },
    // Add more workouts as needed
  ];

  const itemWidth = 130;
  const interval = 20;

  const handleWorkoutPress = (workout) => {
    // Implement the navigation to the details of the selected workout here
    console.log("Selected Workout:", workout.title);
  };

  const handleViewAllPress = () => {
    // Implement the action for the "View All" button here
    console.log("View All Workouts");
  };

  const handleNewWorkout = () => {
    navigation.navigate("DesignWorkout");
  };

  return (
    <View style={{ marginLeft: "3%", marginBottom: 60 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.sectionTitle}>Your Workouts</Text>
        <TouchableOpacity
          onPress={handleViewAllPress}
          style={{ padding: 8, paddingTop: 12 }}
        >
          <Text style={styles.viewAllButton}>View All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.1}
        snapToInterval={itemWidth + interval}
        snapToAlignment="start"
        style={{ paddingBottom: 10 }}
      >
        <TouchableOpacity onPress={handleNewWorkout} style={styles.workoutBox}>
          <View style={styles.plusIconContainer}>
            <FontAwesome5 name="plus" size={40} color="magenta" />
          </View>
        </TouchableOpacity>

        <View style={styles.container}>
          {workoutsData.map((workout) => (
            <TouchableOpacity
              key={workout.id}
              style={styles.workoutBox}
              onPress={() => handleWorkoutPress(workout)}
            >
              <View style={styles.titleSection}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.workoutTitle}
                >
                  {workout.title}
                </Text>
              </View>
              <View style={styles.exercisesContainer}>
                {workout.exercises.map((exercise, index) => (
                  <Text key={index} style={styles.exerciseText}>
                    {exercise}
                  </Text>
                ))}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  viewAllButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "magenta",
  },
  container: {
    flexDirection: "row",
    marginHorizontal: -5,
  },
  titleSection: {
    width: "100%",
    height: 40, // Set the desired height for the title section
    backgroundColor: "magenta", // Red background color
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white", // White text color
    padding: 12,
  },
  exercisesContainer: {
    flex: 1,
    justifyContent: "center",
  },
  exerciseText: {
    fontSize: 14,
    color: "magenta",
    textAlign: "center",
    marginBottom: 5,
  },
  workoutBox: {
    width: 130,
    height: 130,
    backgroundColor: "magenta",
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "magenta",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  plusIconContainer: {
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: "dashed",
    borderColor: "magenta",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 15,
  },
});

export default WorkoutList;
