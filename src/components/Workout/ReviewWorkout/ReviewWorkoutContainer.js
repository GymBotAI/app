import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
} from "react-native";

import ScreenHeader from "../../ScreenHeader";

export default function ReviewWorkoutContainer({
  selectedExercises,
  setShowModal,
}) {
  const [workoutName, setWorkoutName] = useState("Untitled Workout");
  const [exerciseSets, setExerciseSets] = useState([]);

  const handleWorkoutNameChange = (value) => {
    // Limit workout name to 15 characters
    if (value.length <= 15) {
      setWorkoutName(value);
    }
  };

  return (
    <>
      <ScreenHeader title="Review Workout" />
      <SafeAreaView style={styles.container}>
        <View style={styles.workoutNameContainer}>
        
          <TextInput
            style={styles.workoutNameInput}
            value={workoutName}
            onChangeText={handleWorkoutNameChange}
            placeholder="Untitled Workout"
          />
        </View>

        <TouchableOpacity
          onPress={() => setShowModal(false)}
          style={styles.addButton}
        >
          <Text style={styles.buttonText}>+ Add Exercises</Text>
        </TouchableOpacity>

        <ScrollView style={styles.exerciseList}>
          {selectedExercises.map((exercise, index) => (
            <View key={index} style={styles.exerciseItem}>
              <Text style={styles.exerciseName}>{exercise}</Text>
              <TextInput
                style={styles.inputSets}
                placeholder="Sets"
                keyboardType="numeric"
                value={exerciseSets[index]}
                onChangeText={(value) => {
                  const updatedSets = [...exerciseSets];
                  updatedSets[index] = value;
                  setExerciseSets(updatedSets);
                }}
              />
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity onPress={() => setShowModal(false)} style={styles.button}>
          <Text style={styles.buttonText}>Save Workout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F7F7F7",
  },
  workoutNameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  editIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  workoutNameInput: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    height: 40,
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 10,
  },
  addButton: {
    backgroundColor: "black",
    borderRadius: 8,
    alignItems: "center",
    padding: 15,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  exerciseList: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 20,
  },
  exerciseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  exerciseName: {
    fontSize: 18,
  },
  inputSets: {
    fontSize: 18,
    width: 50,
    textAlign: "center",
  },
});
