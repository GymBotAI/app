import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "../../../components/styles";

export default function BuildMuscle({
  setGoalText,
  setInputFilled,
  setSubGoal,
}) {
  const [selectedBody, setSelectedBody] = useState("");

  const handleSelect = (option, option2) => {
    setSelectedBody(option);
    setSubGoal(option);
    setGoalText(option2);
    setInputFilled(true);
  };

  const getButtonStyle = (option) => {
    return {
      ...styles.dropdownButton,
      backgroundColor:
        selectedBody === option ? "orange" : colors.white.default,
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
      <TouchableOpacity
        style={getButtonStyle("Upper")}
        onPress={() => {
          handleSelect("Upper", "Nice choice!");
        }}
      >
        <Text style={getButtonTextStyle("Upper")}>Upper Body</Text>
      </TouchableOpacity>

      {/* Lower Body Dropdown */}
      <TouchableOpacity
        style={getButtonStyle("Lower")}
        onPress={() => {
          handleSelect("Lower", "Nice choice!");
        }}
      >
        <Text style={getButtonTextStyle("Lower")}>Lower Body</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={getButtonStyle("Both")}
        onPress={() => {
          handleSelect("Both", "Nice choice!");
        }}
      >
        <Text style={getButtonTextStyle("Both")}>Both</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    // flex: 1,
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
    marginBottom: 20,
    marginRight: 10,
  },
  dropdownButtonText: {
    color: colors.black.lightest,
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "center",
  },
  dropdownOptions: {
    marginTop: 5,
    width: "100%",
    backgroundColor: colors.grey.lightest,
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
