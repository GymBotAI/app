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

  return (
    <>
      <ScreenHeader title="Review Workout" />
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.workoutNameInput}
          value={workoutName}
          onChangeText={(value) => setWorkoutName(value)}
          placeholder="Enter workout name"
        />
        <TouchableOpacity
          onPress={() => setShowModal(false)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Save Workout</Text>
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

        <TouchableOpacity
          onPress={() => setShowModal(false)}
          style={styles.button}
        >
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
  workoutNameInput: {
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 28,
    alignSelf: "left",
    height: 40,
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 10,
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
  button: {
    padding: 15,
    backgroundColor: "black",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});
