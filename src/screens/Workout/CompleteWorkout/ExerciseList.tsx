import { useState } from "react";
import { View, Text, FlatList, ScrollView, TouchableOpacity } from "react-native";

import type { WorkoutSubGoal } from "../../../types/workouts";
import { FontAwesome } from "@expo/vector-icons"; // You may need to import FontAwesome or an appropriate icon library

export default function ExerciseSelectionScreen({
  setSelectedExercises,
  selectedExercises,
  exercisesToDisplay,
}: {
  exercisesToDisplay: any;
  setSelectedExercises: any;
  selectedExercises: any;
}) {
  

  const toggleExerciseSelection = (exerciseName) => {
    console.log(exerciseName);
    // Check if the exercise is already selected
    const isSelected = selectedExercises.includes(exerciseName);

    // If it's selected, remove it from the selectedExercises array; otherwise, add it.
    if (isSelected) {
      setSelectedExercises(
        selectedExercises.filter((name) => name !== exerciseName)
      );
    } else {
      setSelectedExercises([...selectedExercises, exerciseName]);
    }
    console.log(selectedExercises);
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedExercises.includes(item.name);

    return (
      <TouchableOpacity
        onPress={() => toggleExerciseSelection(item.name)}
        style={{
          backgroundColor: isSelected ? "orange" : "#F5F5F5",
          borderRadius: 8,
          margin: 8,
          padding: 16,
          shadowColor: isSelected ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.05",
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
    <View style={{ marginHorizontal: 10, flex: 1}}>

      <ScrollView>
        <View style={{ height: 65 }}/>
        <FlatList
          data={exercisesToDisplay}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
        <View style={{ height: 100 }}></View>
      </ScrollView>
    </View>
  );
}
