import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Keyboard,
} from "react-native";

import Option from "./NameOption";
import AgeOption from "./AgeOption";
import GenderOption from "./GenderOption";
import WeightOption from "./HeightWeightOption";

import { nameSetting } from "../Home/HomeContainer";
import { ageSetting } from "../Home/HomeContainer";
import { genderSetting } from "../Home/HomeContainer";
import { weightSetting } from "../Home/HomeContainer";
import { heightSetting } from "../Home/HomeContainer";
import { emailValue } from "../Login/LoginBox"

import { minHeight } from "../../styles";
import { maxHeight } from "../../styles";
import { minWeight } from "../../styles";
import { maxWeight } from "../../styles";
 
export default function Settings({ navigation }) {
  const [name, setName] = useState(nameSetting);
  const [newName, setNewName] = useState("");
  const [bday, setBday] = useState(ageSetting);
  const [gender, setGender] = useState(genderSetting);
  const [weight, setWeight] = useState(weightSetting);
  const [height, setHeight] = useState(heightSetting);

  const handleSaveChanges = () => {
    // Perform saving changes logic here
  };

  const updateCredentials = async () => {
    try {
      const response = await fetch("http://openhost.ddns.net:3000/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "NAME": String(name),
          "USERNAME": emailValue,
          "GENDER": gender,
          "DOB": bday,
          "WEIGHT": weight,
          "HEIGHT": height
        }),
      });
  
      const data = await response.json();
      return data; // Return the response data
    } catch (error) {
      console.error("Error checking credentials:", error);
      return null; // Return null in case of an error
    }
  };

  const handleGoHome = async () => {
    setNewName(name)
    navigation.navigate("Home");
    setName(name)
    console.log(newName)
    updateCredentials();
    console.log(ageSetting)
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      {/* <View style={styles.container}> */}

      <WeightOption question="Name" value={name} setValue={setName} />
      <AgeOption question="Age" value={bday} setValue={setBday} />
      <GenderOption question="Gender" value={gender} setValue={setGender} />
      <WeightOption
        question="Weight"
        value={weight}
        setValue={setWeight}
        unit={"kg"}
        upper={maxWeight}
        lower={minWeight}
        met="kg"  
        imp="lb"
        conversion={2.20462262185}
      />
      <WeightOption
        question="Height"
        value={height}
        setValue={setHeight}
        unit={"cm"}
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
