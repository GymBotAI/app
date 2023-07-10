import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import {nameValue} from "./signup/Name";
import {dateValue} from "./signup/Age";
import {genderVal} from "./signup/Gender";
import {Goals} from "./GoalSelect";

function ageCalculation(date){
  const currentDate = new Date(); // Get the current date
  const [day, month, year] = date.split("/"); // Split the given date into day, month, and year

  const givenDateObj = new Date(year, month - 1, day); // Create a new Date object for the given date (month - 1 because months are zero-based)

  const diffTime = Math.abs(currentDate - givenDateObj); // Calculate the difference in milliseconds between the current date and the given date
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25)); // Convert milliseconds to years
  return diffYears;
}

export default function Settings({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [fitnessGoal, setFitnessGoal] = useState("");
  const [gender, setGender] = useState("");

  const handleSaveChanges = () => {
    // Perform saving changes logic here
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={nameValue}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        value={dateValue}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        value={ageCalculation(dateValue).toString()}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={Goals}
        onChangeText={setFitnessGoal}
      />

      <TextInput
        style={styles.input}
        value={genderVal}
        onChangeText={setGender}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    overflow: "auto",
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: "#333",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
