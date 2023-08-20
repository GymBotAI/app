import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import BuildMuscle from "./BuildMuscle";
import GoalSelector from "./GoalSelector"

const WorkoutSelectionScreen = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);
  
  let option1 = null;
  if (selectedGoal === "Build Muscle") {
    option1 = (
    <>
    <View style={{height: 1, backgroundColor: "#ccc", width: "90%", marginLeft: '5%'}}/>
    <BuildMuscle />
    </>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your goal?</Text>

      <GoalSelector selectedGoal={selectedGoal} setSelectedGoal={setSelectedGoal}/>
      
      {option1}


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
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

export default WorkoutSelectionScreen;
