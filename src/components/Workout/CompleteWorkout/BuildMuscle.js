import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const exercises = [
    { id: '1', name: 'Push-Ups' },
    { id: '2', name: 'Sit-Ups' },
    { id: '3', name: 'Squats' },
    // Add more exercises as needed
  ];
  

const ExerciseSelectionScreen = () => {
  const [selectedExercises, setSelectedExercises] = useState([]);

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
          borderColor: '#ccc',
          backgroundColor: isSelected ? '#e0e0e0' : 'white',
        }}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
        Select Exercises
      </Text>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {/* Display the selected exercises here */}
    </View>
  );
};

export default ExerciseSelectionScreen;
