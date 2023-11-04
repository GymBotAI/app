import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { Feather } from "@expo/vector-icons";

let index = 0;

const SportsSpecific = ({ setGoalText, setInputFilled }) => {
  const [selectedSport, setSelectedSport] = useState("");

  const handleSelect = (option, option2) => {
    setSelectedSport(option);
    setGoalText(option2);
    setInputFilled(true);
  };

  const getButtonStyle = (option) => {
    return {
      ...styles.dropdownButton,
      backgroundColor: selectedSport === option ? "orange" : "white",
    };
  };

  const getButtonTextStyle = (option) => {
    return {
      ...styles.dropdownButtonText,
      fontWeight: selectedSport === option ? "bold" : "normal",
    };
  };

  return (
    <View style={styles.container}>
      {/* Football/Soccer */}
      <TouchableOpacity
        style={getButtonStyle("Football/Soccer")}
        onPress={() => {
          handleSelect("Football/Soccer", "Nice choice!");
        }}
      >
        <Text style={getButtonTextStyle("Football/Soccer")}>
          Football/Soccer
        </Text>
      </TouchableOpacity>

      {/* Basketball */}
      <TouchableOpacity
        style={getButtonStyle("Basketball")}
        onPress={() => {
          handleSelect("Basketball", "Awesome!");
        }}
      >
        <Text style={getButtonTextStyle("Basketball")}>Basketball</Text>
      </TouchableOpacity>

      {/* Running */}
      <TouchableOpacity
        style={getButtonStyle("Running")}
        onPress={() => {
          handleSelect("Running", "Great idea!");
        }}
      >
        <Text style={getButtonTextStyle("Running")}>Running</Text>
      </TouchableOpacity>

      {/* Volleyball */}
      <TouchableOpacity
        style={getButtonStyle("Volleyball")}
        onPress={() => {
          handleSelect("Volleyball", "Sounds good!");
        }}
      >
        <Text style={getButtonTextStyle("Volleyball")}>Volleyball</Text>
      </TouchableOpacity>

      {/* Other */}
      <TouchableOpacity
        style={getButtonStyle("Other")}
        onPress={() => {
          handleSelect("Other", "Alright!");
        }}
      >
        <Text style={getButtonTextStyle("Other")}>Other</Text>
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
    backgroundColor: "white",
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

export default SportsSpecific;
