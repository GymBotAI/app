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
import { Entypo } from "@expo/vector-icons";

export default function ReviewWorkoutContainer({
  selectedExercises,
  setShowModal,
}) {
  const [workoutName, setWorkoutName] = useState("Untitled Workout");
  const [exerciseSets, setExerciseSets] = useState([]);
  const [exerciseReps, setExerciseReps] = useState([]); // New state for reps
  const [inputFilled, setInputFilled] = useState(false);

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
        <View style={styles.topSection}>
          <TextInput
            style={styles.workoutNameInput}
            value={workoutName}
            onChangeText={handleWorkoutNameChange}
            placeholder="Untitled Workout"
          />
          <Entypo name="edit" size={24} color="black" style={styles.editIcon} />
        </View>

        <TouchableOpacity
          onPress={() => setShowModal(false)}
          style={styles.button}
        >
          <Text style={styles.text}>Add Exercises</Text>
        </TouchableOpacity>

        <View
          style={{ backgroundColor: "#e3e3e3", height: 1, marginVertical: 10 }}
        />

        <ScrollView style={styles.exerciseList}>
          {selectedExercises.map((exercise, index) => (
            <View key={index} style={styles.exerciseItem}>
              <Text style={styles.exerciseName}>{exercise}</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputReps}
                  placeholder="Reps" // Add placeholder for reps
                  keyboardType="numeric"
                  value={exerciseReps[index]} // Use reps value from state
                  onChangeText={(value) => {
                    const updatedReps = [...exerciseReps];
                    updatedReps[index] = value;
                    setExerciseReps(updatedReps);
                  }}
                />
                <Text>x</Text>
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
            </View>
          ))}
        </ScrollView>

        <TouchableOpacity
          onPress={() => setShowModal(false)}
          style={[styles.saveButton, !inputFilled && styles.disabledButton]}
          disabled={inputFilled}
        >
          <Text style={styles.text}>Complete Workout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  topSection: {
    marginTop: -8,
    marginLeft: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  saveButton: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#1260de",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  button: {
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#1260de",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  disabledButton: {
    backgroundColor: "#fff", // Change the background color of the disabled button
  },
  text: {
    alignSelf: "center",
    fontSize: 24,
    paddingVertical: 10,
    color: "#dbdbdb",
    fontWeight: "bold",
  },
  workoutNameInput: {
    marginTop: 18,
    fontSize: 28,
    fontWeight: "bold",
    height: 40,
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 10,
  },
  editIcon: {
    marginLeft: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  exerciseList: {
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputSets: {
    fontSize: 18,
    width: 50,
    textAlign: "center",
  },
  inputReps: {
    fontSize: 18,
    width: 50,
    textAlign: "center",
  },
});
