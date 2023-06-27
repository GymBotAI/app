import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";


import EditSettings from "../components/EditSettings";
import GymBotNavigation from "../components/navbar";

import { bgPrimary, white } from "../styles";

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
    
      <View
        style={{
          height: "100%",
          width: "100%",
        }}
      >
      
      <Text style={styles.heading}>Settings</Text>
      <EditSettings/>
      <GymBotNavigation
      navigation={navigation}
      />
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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