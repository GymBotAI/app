import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { Feather } from "@expo/vector-icons";

const BuildMuscle = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
  };

  const getButtonStyle = (option) => {
    return {
      ...styles.dropdownButton,
      backgroundColor: selectedOption === option ? "orange" : "white",
    };
  };

  const getButtonTextStyle = (option) => {
    return {
      ...styles.dropdownButtonText,
      fontWeight: selectedOption === option ? "bold" : "normal",
    };
  };

  return (
    <View style={styles.container}>
      {/* Upper Body Dropdown */}
      <TouchableOpacity
        style={getButtonStyle("Upper Body")}
        onPress={() => handleOptionSelection("Upper Body")}
      >
        <Text style={getButtonTextStyle("Upper Body")}>Upper Body</Text>
      </TouchableOpacity>

      {/* Lower Body Dropdown */}
      <TouchableOpacity
        style={getButtonStyle("Lower Body")}
        onPress={() => handleOptionSelection("Lower Body")}
      >
        <Text style={getButtonTextStyle("Lower Body")}>Lower Body</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    flex: 1,
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
