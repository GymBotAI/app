import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export let Goals = [];

const GoalSelect = ({ text, onGoalChange }) => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    onGoalChange(true);
    setSelected(!selected);
    Goals.push(text); //Goals are pushed both when the buttons are clicked and unclicked so the are duplicated
    let dupGoals = Goals.filter((element, index) => {
      return Goals.indexOf(element) !== index;
    }); //This makes you find duplicates and stores them
    Goals = Goals.filter((element, index) => {
      return Goals.indexOf(element) === index;
    }); //This removes duplicates from Goals
    Goals = Goals.filter(function (val) {
      return dupGoals.indexOf(val) == -1;
    }); //This compares both and removes any that were duplicated and the same
  };

  return (
    <TouchableOpacity
      style={[styles.buttonBox, selected && styles.selectedButton]}
      onPress={handlePress}
    >
      <Text style={[styles.boxText, selected && styles.selectedText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBox: {
    margin: 10,
    width: "45%",
    borderWidth: 1,
    borderColor: "magenta",
    borderRadius: 10,
    padding: 10,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "magenta", // Change to your desired background color when selected
    borderColor: "magenta",
  },
  boxText: {
    fontSize: 16,
    color: "magenta",
    fontWeight: "bold",
  },
  selectedText: {
    color: "magenta", // Change to your desired text color when selected
  },
});

export default GoalSelect;
