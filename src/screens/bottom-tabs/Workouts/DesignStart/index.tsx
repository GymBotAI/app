import { useEffect, useState } from "react";
import {
  Dimensions,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { colors } from "$styles";
import { Box } from "./.styles"

import Button from "$components/Button";
import ScreenHeader from "$components/ScreenHeader";
import {
  bothExercises,
  lowerExercises,
  upperExercises,
} from "../DesignManual/workoutData";
import BodyDefinition from "./BodyDefinition";
import BuildMuscle from "./BuildMuscle";
import GoalSelector from "./GoalSelector";
import SportsSpecific from "./SportsSpecific";

// import Text from "$components/Text";

import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

export default function WorkoutSelectionScreen({ route, navigation }) {
  const { width, height } = Dimensions.get("window");
  const bottomPadding = Math.min(width, height) / 35;
  const { type } = route.params;

  const [selectedGoal, setSelectedGoal] = useState(null);
  const [subGoal, setSubGoal] = useState(null);
  const [typedText, setTypedText] = useState("");
  const [goalText, setGoalText] = useState("What is your goal?");
  const [isInputFilled, setInputFilled] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= goalText.length) {
        setTypedText(goalText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 5); // Adjust typing speed here (milliseconds)

    return () => {
      clearInterval(typingInterval);
    };
  }, [goalText]); // Listen for changes to goalText

  let option1 = null;
  if (selectedGoal === "Build Muscle") {
    option1 = (
      <>
        <View
          style={{
            height: 1,
            backgroundColor: colors.grey.lighter,
            width: "90%",
            marginLeft: "5%",
          }}
        />
        <BuildMuscle
          setGoalText={setGoalText}
          setInputFilled={setInputFilled}
          setSubGoal={setSubGoal}
        />
      </>
    );
  } else if (selectedGoal === "Body Definition") {
    option1 = (
      <>
        <View
          style={{
            height: 1,
            backgroundColor: colors.grey.lighter,
            width: "90%",
            marginLeft: "5%",
          }}
        />
        <BodyDefinition
          setGoalText={setGoalText}
          setInputFilled={setInputFilled}
          setSubGoal={setSubGoal}
        />
      </>
    );
  } else if (selectedGoal === "Sports Specific") {
    option1 = (
      <>
        <View
          style={{
            height: 1,
            backgroundColor: colors.grey.lighter,
            width: "90%",
            marginLeft: "5%",
          }}
        />
        <SportsSpecific
          setGoalText={setGoalText}
          setInputFilled={setInputFilled}
        />
      </>
    );
  }

  const goDesign = () => {
    let exercisesToDisplay = [];

    if (type == "AI" || selectedGoal == "Custom") {
      navigation.replace("DesignAI", {
        goal: selectedGoal,
        subGoal: subGoal,
        custom: notes,
      });
    } else {
      if (subGoal == "Upper") {
        exercisesToDisplay = upperExercises;
      } else if (subGoal == "Lower") {
        exercisesToDisplay = lowerExercises;
      } else if (subGoal == "Both") {
        exercisesToDisplay = bothExercises;
      }

      navigation.navigate("DesignManual", {
        exercisesToDisplay: exercisesToDisplay,
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={Box.container}>
        <ScreenHeader title="Workouts" />
        <View style={Box.chatContainer}>
          <LinearGradient
            colors={[colors.blue.default, colors.blue.lighter]} // Lighter blue gradient colors
            start={[0, 0.5]}
            end={[1, 0.5]}
            style={Box.chatBox}
          >
            <Image
              source={require("$assets/circleicon.png")}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: colors.white.default,
                marginRight: 10,
              }}
            />
            <Text style={Box.chatText}>{typedText}</Text>
          </LinearGradient>
        </View>

        {!completed && (
          <>
            <GoalSelector
              selectedGoal={selectedGoal}
              setSelectedGoal={setSelectedGoal}
              setGoalText={setGoalText}
              setInputFilled={setInputFilled}
              notes={notes}
              setNotes={setNotes}
            />

            {option1}

            <Button
              text="Continue"
              size="medium"
              onPress={goDesign}
              disabled={!isInputFilled}
              style={{
                width: "80%",
                position: "absolute",
                bottom: bottomPadding,
              }}
            />
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}