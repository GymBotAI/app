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
import WeightOption from "./HeightWeightOption";

import { emailValue } from "../Login/LoginBox"
import { nameValue } from "../SignUp/Name";
import { dateValue } from "../SignUp/Age";
import { genderVal } from "../SignUp/Gender";
import { weightVal, wUnit } from "../SignUp/HeightWeightContainer";
import { heightVal, hUnit } from "../SignUp/HeightWeightContainer";

import { nameSetting } from "../Home/HomeContainer";
import { ageSetting } from "../Home/HomeContainer";
import { weightSetting } from "../Home/HomeContainer";
import { heightSetting } from "../Home/HomeContainer";


import { minHeight } from "../../styles";
import { maxHeight } from "../../styles";
import { minWeight } from "../../styles";
import { maxWeight } from "../../styles";

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

  const getDetails = async (emailVal) => {
    try {
      const response = await fetch("http://openhost.ddns.net:3000/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "USERNAME": String(emailVal),
        }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
  }
}
  const handleSaveChanges = () => {
    // Perform saving changes logic here
  };

  const handleGoHome = async () => {
    navigation.navigate("Home");
    console.log(ageSetting)
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      {/* <View style={styles.container}> */}

      <Option question="Name" value={nameSetting} setValue={setName} />
      <AgeOption question="Age" value={ageSetting} setValue={setBday} />
      <GenderOption question="Gender" value={gender} setValue={setGender} />
      <WeightOption
        question="Weight"
        value={weightSetting}
        setValue={setWeight}
        unit={wUnit}
        upper={maxWeight}
        lower={minWeight}
        met="kg"
        imp="lb"
        conversion={2.20462262185}
      />
      <WeightOption
        question="Height"
        value={heightSetting}
        setValue={setHeight}
        unit={hUnit}
        upper={maxHeight}
        lower={minHeight}
        met="cm"
        imp="in"
        conversion={0.393701}
      />

      <TouchableOpacity style={styles.homeButton} onPress={handleGoHome}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>

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
  homeButton: {
    backgroundColor: "#333",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});
