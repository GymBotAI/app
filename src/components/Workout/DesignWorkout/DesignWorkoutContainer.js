import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import * as Font from "expo-font";


import BuildMuscle from "./BuildMuscle";
import GoalSelector from "./GoalSelector";

const WorkoutSelectionScreen = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [typedText, setTypedText] = useState("");
  const [goalText, setGoalText] = useState("What is your goal?");
  const [isInputFilled, setInputFilled] = useState(false);



  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= goalText.length) {
        setTypedText(goalText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 15); // Adjust typing speed here (milliseconds)
    
    async function loadFont() {
      await Font.loadAsync({
        "roboto-black": require("../../../../assets/fonts/Roboto-Black.ttf"),
      });
    }

    loadFont();

    return () => {
      clearInterval(typingInterval);
    };
  }, [goalText]); // Listen for changes to goalText

  let option1 = null;
  if (selectedGoal === "Build Muscle") {
    option1 = (
      <>
        <View style={{ height: 1, backgroundColor: "#ccc", width: "90%", marginLeft: "5%" }} />
        <BuildMuscle setGoalText={setGoalText} setInputFilled={setInputFilled}/>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <View style={styles.chatBox}>
          <Image
            source={require("../../../../assets/circleicon.png")}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              borderWidth: 1,
              borderColor: "white",
              marginRight: 10,
            }}
          />
          <Text style={styles.chatText}>{typedText}</Text>
        </View>
      </View>

      <GoalSelector selectedGoal={selectedGoal} setSelectedGoal={setSelectedGoal} setGoalText={setGoalText} />

      {option1}

      <TouchableOpacity
          style={[styles.button, !isInputFilled && styles.disabledButton]}
          disabled={!isInputFilled}
        >
          <Text style={styles.text}>Continue</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  chatContainer: {
    alignItems: "center",
    margin: 15,
    marginBottom: 20,
  },
  chatBox: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  chatText: {
    flex: 1, // Allow text to wrap within the available space
    fontSize: 20,
    fontWeight: "bold",
  },  
  button: {
    alignSelf: "center",
    position: 'absolute',
    bottom: 50,
    width: "90%",
    backgroundColor: "#1260de",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  disabledButton: {
    backgroundColor: "#fff", // Change the background color of the disabled button
  },
  text: {
    alignSelf: "center",
    fontSize: 24,
    fontFamily: "roboto-black",
    paddingVertical: 10,
    color: "#dbdbdb",
  },
});

export default WorkoutSelectionScreen;
