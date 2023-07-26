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
import AgeOption from "./AgeOption";
import GenderOption from "./GenderOption";
import WeightOption from "./WeightOption";

import { nameValue } from "../SignUp/Name";
import { dateValue } from "../SignUp/Age";
import { genderVal } from "../SignUp/Gender";
import { weightVal, wUnit } from "../SignUp/HeightWeightContainer";
import { heightVal, hUnit } from "../SignUp/HeightWeightContainer";

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
  const [bday, setBday] = useState(dateValue);
  // const [age, setAge] = useState(ageCalculation(dateValue))
  const [gender, setGender] = useState(genderVal);
  const [weight, setWeight] = useState(weightVal);
  const [height, setHeight] = useState(heightVal);

  const handleSaveChanges = () => {
    // Perform saving changes logic here
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      {/* <View style={styles.container}> */}

      <Option question="Name" value={name} setValue={setName} />
      <AgeOption question="Age" value={bday} setValue={setBday} />
      <GenderOption question="Gender" value={gender} setValue={setGender} />
      <WeightOption
        question="Weight"
        value={weight}
        setValue={setWeight}
        unit={wUnit}
        upper={400}
        lower={0}
        met="kg"
        imp="lb"
      />
      <WeightOption
        question="Height"
        value={height}
        setValue={setHeight}
        unit={hUnit}
        upper={250}
        lower={0}
        met="cm"
        imp="in"
      />
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
