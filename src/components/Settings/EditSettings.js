import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Keyboard,
} from "react-native";

import Option from "./NameOption";
import WeightOption from "./AgeOption";

import { nameValue } from "../SignUp/Name";
import { dateValue } from "../SignUp/Age";
import { genderVal } from "../SignUp/Gender";
import { Goals } from "../SignUp/GoalSelect";

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
  const [age, setAge] = useState(dateValue);
  const [goal, setGoal] = useState(Goals.join(", "));
  const [gender, setGender] = useState(genderVal);
  const [weight, setWeight] = useState("0");
  const [height, setHeight] = useState("0");

  const handleSaveChanges = () => {
    // Perform saving changes logic here
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      {/* <View style={styles.container}> */}

      <Option question="Name" value={name} setValue={setName} />
      <WeightOption question="Age" value={age} setValue={setAge} />
      <Option question="Gender" value={gender} setValue={setGender} />
      <Option question="Weight" value={weight} setValue={setWeight} />
      <Option question="Height" value={height} setValue={setHeight} />
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
