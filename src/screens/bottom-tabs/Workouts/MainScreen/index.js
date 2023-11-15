import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import ScreenHeader from "$components/ScreenHeader";
import RunningPage from "../Running/RunningPage";
//---------- Styles ----------//
import { Box } from "./.styles";
//---------- Components ----------//
import CreateWorkoutButton from "./CreateWorkoutButton";
import TalkToGymBotSection from "./TalkToGymBot";
import WorkoutList from "./WorkoutList";

export default function ViewWorkouts({ navigation }) {
  const [showRun, setShowRun] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const toggleRunningPage = () => {
    setShowButtons(false);
    setShowRun(!showRun);
  };

  const goDesign = () => {
    navigation.navigate("DesignStart")
    // navigation.navigate("DesignStart", {
    //   subGoal: subGoal,
    // });
  };

  const toggleWorkoutButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <>
      <ScreenHeader title="Workouts" />
      <ScrollView style={Box.container}>
        <CreateWorkoutButton goDesign={goDesign}/>

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
