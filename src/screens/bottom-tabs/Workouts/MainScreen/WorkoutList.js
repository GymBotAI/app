import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { colors } from "$styles";
import { workoutList } from "./.styles";
import { FontAwesome5 } from "@expo/vector-icons";

export default function WorkoutList({ navigation }) {
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
    <View style={workoutList.container}>
      <View style={workoutList.headerContainer}>
        <Text style={workoutList.sectionTitle}>Your Workouts</Text>
        <TouchableOpacity
          onPress={handleViewAllPress}
          style={{ padding: 8, paddingTop: 12 }}
        >
          <Text style={workoutList.viewAllButton}>View All</Text>
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
        <TouchableOpacity onPress={handleNewWorkout} style={workoutList.workoutBox}>
          <View style={workoutList.plusIconContainer}>
            <FontAwesome5 name="plus" size={40} color={colors.black.lightest} />
          </View>
        </TouchableOpacity>

        <View style={workoutList.container2}>
          {workoutsData.map((workout) => (
            <TouchableOpacity
              key={workout.id}
              style={workoutList.workoutBox}
              onPress={() => handleWorkoutPress(workout)}
            >
              <View style={workoutList.titleSection}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={workoutList.workoutTitle}
                >
                  {workout.title}
                </Text>
              </View>
              <View style={workoutList.exercisesContainer}>
                {workout.exercises.map((exercise, index) => (
                  <Text key={index} style={workoutList.exerciseText}>
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
}