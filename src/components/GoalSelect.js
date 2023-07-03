import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const GoalSelect = ({ text }) => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
  };

  return (
    <TouchableOpacity
      style={[styles.buttonBox, selected && styles.selectedButton]}
      onPress={handlePress}
    >
      <Text style={[styles.boxText, selected && styles.selectedText]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBox: {
    margin: 10,
    width: "45%",
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 10,
    padding: 10,
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#ff9800", // Change to your desired background color when selected
    borderColor: "#ff9800",
  },
  boxText: {
    fontSize: 16,
    color: "#444",
    fontWeight: "bold",
  },
  selectedText: {
    color: "#fff", // Change to your desired text color when selected
  },
});

export default GoalSelect;
