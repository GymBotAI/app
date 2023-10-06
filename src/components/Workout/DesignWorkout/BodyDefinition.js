import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { Feather } from "@expo/vector-icons";

const BuildMuscle = ({ setGoalText, setInputFilled, setSubGoal }) => {
  const [selectedBody, setSelectedBody] = useState("")


  const handleSelect = (option, option2) => {
    setSelectedBody(option);
    setSubGoal(option)
    setGoalText(option2);
    setInputFilled(true);
  };

  const getButtonStyle = (option) => {
    return {
      ...styles.dropdownButton,
      backgroundColor: selectedBody === option ? "orange" : "white",
    };
  };

  const getButtonTextStyle = (option) => {
    return {
      ...styles.dropdownButtonText,
      fontWeight: selectedBody === option ? "bold" : "normal",
    };
  };

  return (
    <View style={styles.container}>
      {/* Upper Body Dropdown */}
      <TouchableOpacity style={getButtonStyle("Lose Weight")} onPress={() => {
          handleSelect("Lose Weight", "Let's get it!");
        }}>
        <Text style={getButtonTextStyle("Lose Weight")}>Lose Weight</Text>
      </TouchableOpacity>

      {/* Lower Body Dropdown */}
      <TouchableOpacity style={getButtonStyle("Beach Body")} onPress={() => {
          handleSelect("Beach Body", "Alright!");
        }}>
        <Text style={getButtonTextStyle("Beach Body")}>Beach Body</Text>
      </TouchableOpacity>

      <TouchableOpacity style={getButtonStyle("Lean")} onPress={() => {
          handleSelect("Lean", "Nice choice!");
        }}>
        <Text style={getButtonTextStyle("Lean")}>Lean</Text>
      </TouchableOpacity>

      <TouchableOpacity style={getButtonStyle("Lea")} onPress={() => {
          handleSelect("Abs", "Nice choice!");
        }}>
        <Text style={getButtonTextStyle("Abs")}>Abs</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    // flex: 1,
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  dropdownButton: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 20,
    marginRight: 10,
  },
  dropdownButtonText: {
    color: "#444",
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "center",
  },
  dropdownOptions: {
    marginTop: 5,
    width: "100%",
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  option: {
    paddingVertical: 8,
  },
  optionText: {
    fontSize: 16,
  },
});

export default BuildMuscle;
