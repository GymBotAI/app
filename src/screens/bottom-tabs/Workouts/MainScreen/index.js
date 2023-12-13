import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

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
  const [showButtons, setShowButtons] = useState(false);

  return (
    <>

      <Button
        // onPress={setShowButtons(!showButtons)}
        text="Record Exercise"
        size="medium"
        style={{
          position: "absolute",
          bottom: 15,
          width: "80%",
          alignSelf: "center",
        }}
      />
    </>
  )

}
