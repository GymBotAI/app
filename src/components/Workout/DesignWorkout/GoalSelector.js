import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import BuildMuscle from "./BuildMuscle";

const GoalSelector = ({selectedGoal, setSelectedGoal}) => {

  const handleWorkoutSelection = (workoutType) => {
    console.log("Si")
    setSelectedGoal(workoutType);
  };

  const getButtonStyle = (workoutType) => {
    return {
      ...styles.button,
      backgroundColor: selectedGoal === workoutType ? "orange" : "white",
    };
  };

  const getButtonTextStyle = (workoutType) => {
    return {
      ...styles.buttonText,
      fontWeight: selectedGoal === workoutType ? "bold" : "normal",
    };
  };

  return (
      <View style={styles.buttonContainer}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={getButtonStyle("Build Muscle")}
            onPress={() => handleWorkoutSelection("Build Muscle")}
          >
            <Text style={getButtonTextStyle("Build Muscle")}>Build Muscle</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={getButtonStyle("Lose Weight")}
            onPress={() => handleWorkoutSelection("Lose Weight")}
          >
            <Text style={getButtonTextStyle("Lose Weight")}>Lose Weight</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={getButtonStyle("Sports-Specific Training")}
            onPress={() => handleWorkoutSelection("Sports-Specific Training")}
          >
            <Text style={getButtonTextStyle("Sports-Specific Training")}>
              Sports-Specific
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={getButtonStyle("Custom")}
            onPress={() => handleWorkoutSelection("Custom")}
          >
            <Text style={getButtonTextStyle("Custom")}>Custom</Text>
          </TouchableOpacity>
        </View>


    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: "left",
    margin: 15,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "column",
    paddingLeft: 17,
    paddingRight: 7,
  },
  button: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 20,
    marginRight: 10,
  },
  buttonText: {
    color: "#444",
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "center",
  },
});

export default GoalSelector;
