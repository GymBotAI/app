import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native";

//---------- Components ----------//
import CreateWorkoutButton from "./CreateWorkoutButton";
import WorkoutList from "./WorkoutList";
import TalkToGymBotSection from "./TalkToGymBot";
import RunningPage from "./Running/RunningPage";

//---------- Styles ----------//
import { Box } from "./.styles";

export default function ViewWorkouts({ navigation }) {
  const [showRun, setShowRun] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const toggleRunningPage = () => {
    setShowButtons(false);
    setShowRun(!showRun);
  };

  const handleAddWorkout = () => {
    navigation.navigate("DesignWorkout");
  };

  const toggleWorkoutButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <>
      <ScrollView style={Box.container}>
        <CreateWorkoutButton handleAddWorkout={handleAddWorkout} />

        <TalkToGymBotSection navigation={navigation} />
        <WorkoutList navigation={navigation} />
        {showRun && <RunningPage onClose={toggleRunningPage} />}
      </ScrollView>

      {!showButtons && (
        <TouchableOpacity
          style={styles.addButtonContainer}
          onPress={toggleWorkoutButtons}
        >
          <Text style={styles.addText}>Record Exercise</Text>
        </TouchableOpacity>
      )}

      {showButtons && (
        <View style={styles.addButtonContainer} onPress={toggleWorkoutButtons}>
          <TouchableOpacity onPress={toggleRunningPage}>
            <Text style={styles.workoutOptionsText}>Start a Run 🏃‍♂️</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.workoutOptionsText}>Log Workout💪</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  addButtonContainer: {
    position: "absolute",
    bottom: 80,
    width: "90%",
    marginLeft: "5%",
    backgroundColor: "#1260de",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 5,
  },
  workoutButtonsContainer: {
    position: "absolute",
    bottom: 130,
    width: "90%",
    marginLeft: "5%",
    backgroundColor: "#fff",
    borderRadius: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 5,
  },
  workoutOptionsText: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 10,
    color: "#dbdbdb",
  },
  addText: {
    alignSelf: "center",
    fontSize: 23,
    fontWeight: "bold",
    paddingVertical: 10,
    color: "#dbdbdb",
  },
});
