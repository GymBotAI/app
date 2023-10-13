import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import type { WorkoutSubGoal } from "../../../types/workouts";

const lowerExercises = [
  { id: "1", name: "Leg Press" },
  { id: "2", name: "Lunges" },
  // Add more lower body exercises as needed
];

const upperExercises = [
  { id: "3", name: "Bench Press" },
  { id: "4", name: "Pull-Ups" },
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
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedExercises.includes(item.id);

    return (
      <TouchableOpacity
        onPress={() => toggleExerciseSelection(item.id)}
        style={{
          padding: 16,
          borderBottomWidth: 1,
          borderColor: "#ccc",
          backgroundColor: isSelected ? "#e0e0e0" : "white",
        }}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        Select Exercises
      </Text>
      <FlatList
        data={exercisesToDisplay}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {/* Display the selected exercises here */}
    </View>
  );
}
