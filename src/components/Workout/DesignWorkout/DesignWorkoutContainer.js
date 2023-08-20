import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";

import BuildMuscle from "./BuildMuscle";
import GoalSelector from "./GoalSelector";

const WorkoutSelectionScreen = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [typedText, setTypedText] = useState("");
  const goalText = "What is your goal?";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= goalText.length) {
        setTypedText(goalText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 35); // Adjust typing speed here (milliseconds)

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  let option1 = null;
  if (selectedGoal === "Build Muscle") {
    option1 = (
      <>
        <View style={{ height: 1, backgroundColor: "#ccc", width: "90%", marginLeft: "5%" }} />
        <BuildMuscle />
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
              marginTop: 2,
              marginRight: 8,
            }}
          />
          <Text style={styles.chatText}>{typedText}</Text>
        </View>
      </View>

      <GoalSelector selectedGoal={selectedGoal} setSelectedGoal={setSelectedGoal} />

      {option1}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  chatContainer: {
    alignItems:'center',
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
    fontSize: 24,
    fontWeight: "bold",
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
