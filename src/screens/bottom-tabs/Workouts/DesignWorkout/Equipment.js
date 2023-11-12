import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Feather } from "@expo/vector-icons";

let index = 0;

const LoseWeight = ({ setGoalText, setInputFilled }) => {
  const [dumbell, setDumbell] = useState(false);
  const [jumpRope, setJumpRope] = useState(false);
  const [pullUp, setPullUp] = useState(false);
  const [rowing, setRowing] = useState(false);
  const [other, setOther] = useState(false);

  const handleSelect = () => {
    setGoalText("Great!");
    setInputFilled(true);
  };

  const getButtonStyle = (option) => {
    return {
      ...styles.dropdownButton,
      backgroundColor: true === option ? "orange" : colors.white.default,
    };
  };

  const getButtonTextStyle = (option) => {
    return {
      ...styles.dropdownButtonText,
      fontWeight: true === option ? "bold" : "normal",
    };
  };

  return (
    <View style={styles.container}>
      {/* Upper Body Dropdown */}
      <TouchableOpacity
        style={getButtonStyle(jumpRope)}
        onPress={() => {
          setJumpRope(!jumpRope);
          handleSelect();
        }}
      >
        <Text style={getButtonTextStyle(jumpRope)}>Jump Rope</Text>
      </TouchableOpacity>

      {/* Upper Body Dropdown */}
      <TouchableOpacity
        style={getButtonStyle(dumbell)}
        onPress={() => {
          setDumbell(!dumbell);
          handleSelect();
        }}
      >
        <Text style={getButtonTextStyle(dumbell)}>Dumbells</Text>
      </TouchableOpacity>

      {/* Upper Body Dropdown */}
      <TouchableOpacity
        style={getButtonStyle(pullUp)}
        onPress={() => {
          setPullUp(!pullUp);
          handleSelect();
        }}
      >
        <Text style={getButtonTextStyle(pullUp)}>Pull Up Bar</Text>
      </TouchableOpacity>

      {/* Upper Body Dropdown */}
      <TouchableOpacity
        style={getButtonStyle(rowing)}
        onPress={() => {
          setRowing(!rowing);
          handleSelect();
        }}
      >
        <Text style={getButtonTextStyle(rowing)}>Rowing Machine</Text>
      </TouchableOpacity>

      {/* Upper Body Dropdown */}
      <TouchableOpacity
        style={getButtonStyle(other)}
        onPress={() => {
          setOther(!other);
          handleSelect();
        }}
      >
        <Text style={getButtonTextStyle(other)}>Other</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 20,
    // flex: 1,
    backgroundColor: "magenta",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  dropdownButton: {
    backgroundColor: colors.white.default,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 15,
    marginRight: 10,
  },
  dropdownButtonText: {
    color: "magenta",
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "center",
  },
  dropdownOptions: {
    marginTop: 5,
    width: "100%",
    backgroundColor: "magenta",
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

export default LoseWeight;
