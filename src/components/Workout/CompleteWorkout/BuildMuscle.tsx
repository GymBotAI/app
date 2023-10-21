import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import type { WorkoutSubGoal } from "../../../types/workouts";
import { FontAwesome } from "@expo/vector-icons"; // You may need to import FontAwesome or an appropriate icon library

const lowerExercises = [
  { id: 1, name: "Leg Press" },
  { id: 2, name: "Lunges" },
  { id: 3, name: "Barbell Squats" },
  { id: 4, name: "Deadlifts" },
  { id: 5, name: "Dumbbell Lunges" },
  { id: 6, name: "Leg Press Machine" },
  { id: 7, name: "Seated Leg Curls" },
  { id: 8, name: "Leg Extensions" },
  { id: 9, name: "Smith Machine Squats" },
  { id: 10, name: "Romanian Deadlifts" },
  { id: 11, name: "Hack Squats" },
  { id: 12, name: "Glute Bridges" },
  { id: 13, name: "Plie Squats" },
  { id: 14, name: "Smith Machine Lunges" },
  { id: 15, name: "Bulgarian Split Squats" },
  { id: 16, name: "Box Squats" },
  { id: 17, name: "Zercher Squats" },
  { id: 18, name: "Landmine Squats" },
  { id: 19, name: "Standing Leg Curls" },
  { id: 20, name: "Lying Leg Curls" },
  { id: 21, name: "Single-Leg Press" },
  // Add more lower body exercises as needed
];

const upperExercises = [
  { id: 22, name: "Bench Press" },
  { id: 23, name: "Pull-Ups" },
  { id: 24, name: "Lat Pulldowns" },
  { id: 25, name: "Chest Flyes" },
  { id: 26, name: "Tricep Dips" },
  { id: 27, name: "Bicep Curls" },
  { id: 28, name: "Shoulder Presses" },
  { id: 29, name: "Lat Raises" },
  { id: 30, name: "Seated Rows" },
  { id: 31, name: "Preacher Curls" },
  { id: 32, name: "Hammer Curls" },
  { id: 33, name: "Leg Raises on Roman Chair" },
  { id: 34, name: "Hyperextensions" },
  { id: 35, name: "Decline Bench Press" },
  { id: 36, name: "Incline Dumbbell Press" },
  { id: 37, name: "Cable Tricep Pushdowns" },
  { id: 38, name: "Hammer Strength Chest Press" },
  { id: 39, name: "Romanian Deadlifts" },
  { id: 40, name: "Machine Shrugs" },
  { id: 41, name: "Seated Calf Raises" },
  // Add more upper body exercises as needed
];

const bothExercises = [...lowerExercises, ...upperExercises];

export default function ExerciseSelectionScreen({
  subGoal,
}: {
  subGoal: WorkoutSubGoal;
}) {
  const [selectedExercises, setSelectedExercises] = useState([]);

  let exercisesToDisplay = [];

  // Determine which exercise list to display based on subGoal
  if (subGoal === "Upper") {
    exercisesToDisplay = upperExercises;
  } else if (subGoal === "Lower") {
    exercisesToDisplay = lowerExercises;
  } else if (subGoal === "Both") {
    exercisesToDisplay = bothExercises;
  }

  const toggleExerciseSelection = (exerciseId) => {
    // Check if the exercise is already selected
    const isSelected = selectedExercises.includes(exerciseId);

    // If it's selected, remove it from the selectedExercises array; otherwise, add it.
    if (isSelected) {
      setSelectedExercises(selectedExercises.filter((id) => id !== exerciseId));
    } else {
      setSelectedExercises([...selectedExercises, exerciseId]);
    }
    console.log(selectedExercises);
  };
  const renderItem = ({ item }) => {
    const isSelected = selectedExercises.includes(item.id);

    return (
      <TouchableOpacity
        onPress={() => toggleExerciseSelection(item.id)}
        style={{
          backgroundColor: isSelected ? "orange" : "#F5F5F5",
          borderRadius: 8,
          margin: 8,
          padding: 16,
          shadowColor: isSelected
            ? "rgba(0, 0, 0, 0.1)"
            : "rgba(0, 0, 0, 0.05)",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: isSelected ? 0.8 : 0.2,
          elevation: 3,
          flexDirection: "row",
          alignItems: "center", // Vertically center the camera icon
          justifyContent: "space-between", // Align text and camera icon to the ends
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: isSelected ? "#333" : "#555",
          }}
        >
          {item.name}
        </Text>
        <TouchableOpacity style={{ paddingLeft: 10 }}>
          <FontAwesome name="camera" size={22} color="black" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ marginHorizontal: 10, flex: 1 }}>
      <FlatList
        data={exercisesToDisplay}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={{ height: 100 }}></View>
    </View>
  );
}
