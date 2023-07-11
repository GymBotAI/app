import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  Keyboard,
} from "react-native";

import Option from "./settings/Option";

import { nameValue } from "./signup/Name";
import { dateValue } from "./signup/Age";
import { genderVal } from "./signup/Gender";
import { Goals } from "./GoalSelect";
import { G } from "react-native-svg";

function ageCalculation(date) {
  const currentDate = new Date(); // Get the current date
  const [day, month, year] = date.split("/"); // Split the given date into day, month, and year

  const givenDateObj = new Date(year, month - 1, day); // Create a new Date object for the given date (month - 1 because months are zero-based)

  const diffTime = Math.abs(currentDate - givenDateObj); // Calculate the difference in milliseconds between the current date and the given date
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25)); // Convert milliseconds to years
  return diffYears;
}

export default function Settings({ navigation }) {
  const [name, setName] = useState(nameValue);
  const [age, setAge] = useState(ageCalculation(dateValue).toString());
  const [goal, setGoal] = useState(Goals.join(", "));
  const [gender, setGender] = useState(genderVal);

  const handleSaveChanges = () => {
    // Perform saving changes logic here
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      {/* <View style={styles.container}> */}

      <Option question="Name" value={name} setValue={setName}></Option>

      <Option question="Birthday" value={age} setValue={setAge}></Option>

      <Option question="Goals" value={name} setValue={setName}></Option>

      <Option question="Gender" value={name} setValue={setName}></Option>

      <Text>Birthday:</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <Text>Goals:</Text>
      <TextInput style={styles.input} value={goal} onChangeText={setGoal} />

      <Text>Gender:</Text>
      <TextInput style={styles.input} value={gender} onChangeText={setGender} />

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
      {/* </View> */}
    </Pressable>
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
