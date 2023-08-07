// Import necessary modules
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const WorkoutScreen = () => {
  // State to track the selected workout goal
  const [selectedGoal, setSelectedGoal] = useState(null);

  // Function to handle goal selection
  const handleGoalSelection = (goal) => {
    setSelectedGoal(goal);
  };

  // Function to render the section based on the selected goal
  const renderGoalSection = () => {
    if (selectedGoal === 'Build Muscle') {
      return (
        <View>
          {/* Build Muscle section code */}
          <Text>Build Muscle Section</Text>
        </View>
      );
    } else if (selectedGoal === 'Functional Strength') {
      return (
        <View>
          {/* Functional Strength section code */}
          <Text>Functional Strength Section</Text>
        </View>
      );
    } else if (selectedGoal === 'Sports-Specific Training') {
      return (
        <View>
          {/* Sports-Specific Training section code */}
          <Text>Sports-Specific Training Section</Text>
        </View>
      );
    } else if (selectedGoal === 'Custom') {
      return (
        <View>
          {/* Custom section code */}
          <Text>Custom Section</Text>
        </View>
      );
    } else {
      // Render a default message if no goal is selected
      return (
        <View>
          <Text>Select your Workout Goal to continue.</Text>
        </View>
      );
    }
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* Workout Goal Selection */}
      <View style={{ marginBottom: 16 }}>
        <Text>Select your Workout Goal to continue.</Text>
        <TouchableOpacity onPress={() => handleGoalSelection('Build Muscle')}>
          <Text>Build Muscle</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGoalSelection('Functional Strength')}>
          <Text>Functional Strength</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGoalSelection('Sports-Specific Training')}>
          <Text>Sports-Specific Training</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleGoalSelection('Custom')}>
          <Text>Custom</Text>
        </TouchableOpacity>
      </View>

      {/* Render the selected goal section */}
      {renderGoalSection()}

      {/* Submit Button */}
      <TouchableOpacity onPress={() => console.log('Submit button pressed')}>
        <Text style={{ backgroundColor: 'blue', color: 'white', padding: 10, textAlign: 'center' }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WorkoutScreen;
