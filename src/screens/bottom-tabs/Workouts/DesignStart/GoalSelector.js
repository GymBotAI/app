import React, { useEffect, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { colors } from "$styles";

import SelectTab from "$components/SelectTab";

export default function GoalSelector({
  selectedGoal,
  setSelectedGoal,
  setGoalText,
  setInputFilled,
  notes,
  setNotes,
}) {
  const handleWorkoutSelection = (workoutType) => {
    setSelectedGoal(workoutType);
    // if (workoutType === "Build Muscle") {
    //   setGoalText("What do you want to train?");
    // } else if (workoutType === "Body Definition") {
    //   setGoalText("What is your specific goal?");
    // } else if (workoutType === "Sports-Specific") {
    //   setGoalText("Which sport do you want to train for?");
    // }
  };

  const getButtonStyle = (workoutType) => {
    return {
      ...styles.button,
      backgroundColor:
        selectedGoal === workoutType
          ? colors.orange.default
          : colors.white.default,
      fontWeight: selectedGoal === workoutType ? "bold" : "normal",
    };
  };

  const getButtonTextStyle = (workoutType) => {
    console.log(selectedGoal)
    console.log(workoutType)
    return {
      alignSelf: 'center',
      fontWeight: selectedGoal === workoutType ? "bold" : "normal",
    };
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.buttonContainer}>
        <View style={{ flexDirection: "row" }}>
          
        <SelectTab text="Build Muscle"
        onPress={() => handleWorkoutSelection("Build Muscle")}
        style={getButtonStyle("Build Muscle")}
        textStyle={getButtonTextStyle("Build Muscle")}
        />

        <SelectTab text="Body Definition"
        onPress={() => handleWorkoutSelection("Body Definition")}
        style={getButtonStyle("Body Definition")}
        textStyle={getButtonTextStyle("Body Definition")}/>

        </View>

        <View style={{ flexDirection: "row" }}>
        <SelectTab text="Sports Specific"
        onPress={() => handleWorkoutSelection("Sports Specific")}
        style={getButtonStyle("Sports Specific")}
        textStyle={getButtonTextStyle("Sports Specific")}/>
          
          {/* <TextInput
            value={notes}
            placeholder="Other"
            style={{
              flex: 1,
              backgroundColor:
                selectedGoal === "Custom"
                  ? colors.orange.default
                  : colors.white.default,
              paddingVertical: 15,
              paddingHorizontal: 10,
              marginRight: 10,
              marginBottom: 20,
              borderRadius: 8,
              color: colors.black.lightest,
              fontSize: 18,
              fontWeight: "normal",
              textAlign: "center",
            }}
            maxLength={20}
            onChange={(e) => {
              setNotes(e.nativeEvent.text);
              console.log(notes);
              setSelectedGoal("Custom");
              if (e != "") {
                setInputFilled(true);
              } else {
                setInputFilled(false);
              }
            }}
          /> */}

          <SelectTab text="Other"
        onPress={() => handleWorkoutSelection("Other")}
        style={getButtonStyle("Other")}
        textStyle={getButtonTextStyle("Other")}/>

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: colors.white.default,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 20,
    marginRight: 10,
  },
  buttonText: {
    color: colors.black.lightest,
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "center",
  },
});
