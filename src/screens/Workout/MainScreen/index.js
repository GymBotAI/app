import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";

//---------- Components ----------//
import CreateWorkoutButton from "./CreateWorkoutButton";
import WorkoutList from "./WorkoutList";
import TalkToGymBotSection from "./TalkToGymBot";
import RunningPage from "../Running/RunningPage";
import ScreenHeader from "$components/ScreenHeader";

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
      <ScreenHeader title="Workouts" />
      <ScrollView style={Box.container}>
        <CreateWorkoutButton handleAddWorkout={handleAddWorkout} />

        <TalkToGymBotSection navigation={navigation} />
        <WorkoutList navigation={navigation} />
        {showRun && <RunningPage onClose={toggleRunningPage} />}
      </ScrollView>

      {!showButtons && (
        <TouchableOpacity
          style={Box.recordButton}
          onPress={toggleWorkoutButtons}
        >
          <Text style={Box.recordText}>Record Exercise</Text>
        </TouchableOpacity>
      )}

      {showButtons && (
        <View style={Box.addButton} onPress={toggleWorkoutButtons}>
          <TouchableOpacity onPress={toggleRunningPage}>
            <Text style={Box.addText}>Start a Run 🏃‍♂️</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Box.addText}>Log Workout💪</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
