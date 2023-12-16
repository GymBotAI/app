import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

//---------- Components ----------//
import Button from "$components/Button";
import ScreenHeader from "$components/ScreenHeader";
import RunningPage from "../Running/RunningPage";
//---------- Styles ----------//
import { Box } from "./.styles";
import CreateWorkoutButton from "./CreateWorkoutButton";
import TalkToGymBotSection from "./TalkToGymBot";
import WorkoutList from "./WorkoutList";

export default function MainWorkout({ navigation }) {
  const [showRun, setShowRun] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const { width, height } = Dimensions.get("window");
  const bottomPadding = Math.min(width, height) / 35;

  const toggleRunningPage = () => {
    setShowButtons(false);
    setShowRun(!showRun);
  };

  const goDesignAI = () => {
    navigation.navigate("DesignStart", {
      type: "AI",
    });
  };

  const goDesignManual = () => {
    navigation.navigate("DesignStart", {
      type: "Manual",
    });
  };
  const toggleWorkoutButtons = () => {
    setShowButtons(!showButtons);
  };

  return (
    <>
      <ScreenHeader title="Workouts" />
      <ScrollView style={Box.container}>
        <CreateWorkoutButton
          goDesignAI={goDesignAI}
          goDesignManual={goDesignManual}
        />

        <TalkToGymBotSection navigation={navigation} />
        <WorkoutList navigation={navigation} />
        {showRun && <RunningPage onClose={toggleRunningPage} />}
      </ScrollView>

      {!showButtons && (
        <Button
          onPress={() => setShowButtons(!showButtons)}
          text="Record Exercise"
          size="medium"
          style={{
            position: "absolute",
            bottom: bottomPadding,
            width: "80%",
            alignSelf: "center",
          }}
        />
      )}
      {showButtons && (
        <View style={Box.addButton}>
          <TouchableOpacity onPress={toggleRunningPage}>
            <Text style={Box.addText}>Start a Run 🏃‍♂️</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setShowButtons(false);
              console.log(showButtons);
            }}
          >
            <Text style={Box.addText}>Log Workout💪</Text>
          </TouchableOpacity>
        </View>
      )}
      <StatusBar barStyle="dark" />
    </>
  );
}
