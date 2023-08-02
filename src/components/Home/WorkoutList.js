import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";


const WorkoutList = ({navigation}) => {
  const workoutsData = [
    {
      id: 1,
      title: "Full Body Workout",
      exercises: ["Push-ups", "Squats", "Burpees"],
      image: require("../../../assets/homebgdark.jpg"),  
    },
    {
      id: 2,
      title: "Cardio Blast",
      exercises: ["Jumping Jacks", "High Knees", "Mountain Climbers"],
      image: require("../../../assets/accountbgdark.jpg"),
    },
    {
      id: 3,
      title: "Leg Day",
      exercises: ["Lunges", "Deadlifts", "Calf Raises"],
      image: require("../../../assets/accountbgdark.jpg"),
    },
    {
      id: 4,
      title: "Full Body Workout",
      exercises: ["Push-ups", "Squats", "Burpees"],
      image: require("../../../assets/accountbgdark.jpg"),
    },
    {
      id: 5,
      title: "Cardio Blast",
      exercises: ["Jumping Jacks", "High Knees", "Mountain Climbers"],
      image: require("../../../assets/accountbgdark.jpg"),
    },
    {
      id: 6,
      title: "Leg Day",
      exercises: ["Lunges", "Deadlifts", "Calf Raises"],
      image: require("../../../assets/accountbgdark.jpg"),
    },
    // Add more workouts as needed
  ];

  const itemWidth = 250;
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
    navigation.navigate("Workouts")
  }

  return (
    <View style={{ marginLeft: 15, marginTop: 5, }}>
      <View style={styles.headerContainer}>
        <Text style={styles.sectionTitle}>Explore Workouts</Text>
        <TouchableOpacity onPress={handleViewAllPress} style={{ padding: 8, paddingTop: 12 }}>
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
        <View style={styles.container}>
          {workoutsData.map((workout) => (
            <TouchableOpacity
              key={workout.id}
              style={styles.workoutBox}
              onPress={() => handleWorkoutPress(workout)}
            >
              <LinearGradient
                colors={["black", "transparent"]}
                start={[0.5, 0]}
                end={[0.5, 0.6]}
                style={styles.linearGradient}
              >
                <ImageBackground
                  source={workout.image}
                  resizeMode="cover"
                  style={{
                    width: "110%",
                    height: "110%",
                    opacity: 0.8,
                    marginLeft: -15,
                    borderRadius: 10, // Add borderRadius to match the workoutBox
                  }}
                />
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.workoutTitle}>
                  {workout.title}
                </Text>
              </LinearGradient>
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
    color: "#F29722",
  },
  container: {
    flexDirection: "row",
    marginHorizontal: -5,
  },
  titleSection: {
    width: "100%",
    height: 40, // Set the desired height for the title section
    backgroundColor: "#F29722", // Red background color
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  linearGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "flex-end",
    borderRadius: 10, // Add borderRadius to match the workoutBox
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white", // White text color
    textAlign: "left",
    padding: 12, // Add padding here to separate the title from the bottom of the box
    position: "absolute", // Position the title independently
    bottom: 0, // Place the title at the top of the workoutBox
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
  },
  exercisesContainer: {
    flex: 1,
    justifyContent: "center",
  },
  exerciseText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 5,
  },
  workoutBox: {
    width: 250,
    height: 130,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 15,
  },
});

export default WorkoutList;