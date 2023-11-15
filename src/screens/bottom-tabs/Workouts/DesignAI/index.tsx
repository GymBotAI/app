import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback} from "react-native";

import { colors } from "$styles";

import ScreenHeader from "$components/ScreenHeader";
import BodyDefinition from "../DesignManual/BodyDefinition";
import BuildMuscle from "../DesignManual/BuildMuscle";
import GoalSelector from "../DesignManual/GoalSelector";
import SportsSpecific from "../DesignManual/SportsSpecific";

import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

export default function WorkoutSelectionScreen({ navigation }) {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [subGoal, setSubGoal] = useState(null);
  const [typedText, setTypedText] = useState("");
  const [goalText, setGoalText] = useState("What is your goal?");
  const [isInputFilled, setInputFilled] = useState(false);
  const [completed, setCompleted] = useState(false);

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
  } else if (selectedGoal === "Sports-Specific") {
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

  const completeDesign = () => {
    navigation.replace("CompleteWorkout", {
      subGoal: subGoal,
    });
    if (selectedGoal == "Build Muscle") {
      setGoalText("Select your exercises!");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
      <ScreenHeader title="Workouts" />
      
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey.lightest,
  },
  chatContainer: {
    alignItems: "center",
    margin: 15,
    marginBottom: 20,
  },
  chatBox: {
    backgroundColor: colors.white.default,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  chatText: {
    flex: 1, // Allow text to wrap within the available space
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white.default,
  },
  button: {
    alignSelf: "center",
    position: "absolute",
    bottom: 10,
    width: "90%",
    backgroundColor: colors.blue.default,
    borderRadius: 8,
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  disabledButton: {
    backgroundColor: colors.white.default, // Change the background color of the disabled button
  },
  text: {
    alignSelf: "center",
    fontSize: 24,
    paddingVertical: 10,
    color: colors.grey.lighter,
    fontWeight: "bold",
  },
});
