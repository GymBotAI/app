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

import { buttonStyles } from "../../../styles";

export default function ReviewWorkoutContainer({
  selectedExercises,
  setShowModal,
}) {
  const [workoutName, setWorkoutName] = useState("");
  const [description, setDescription] = useState("");
  const [exerciseSets, setExerciseSets] = useState([]);
  const [exerciseReps, setExerciseReps] = useState([]);
  const [inputFilled, setInputFilled] = useState(false);

  const handleWorkoutNameChange = (value) => {
    setWorkoutName(value);
    setInputFilled(!!value); // Set inputFilled based on whether value is not empty
  };

  return (
    <>
      <ScreenHeader title="Review Workout" />
      <SafeAreaView style={styles.container}>
        <View>
        <View style={styles.topSection}>
          <TextInput
            maxLength={20}
            style={styles.workoutNameInput}
            value={workoutName}
            onChangeText={handleWorkoutNameChange}
            placeholder="Untitled Workout"
          />
          <Entypo
            name="edit"
            size={24}
            color={inputFilled ? "black" : "grey"} // Set color based on inputFilled
            style={styles.editIcon}
          />
          </View>

        <TextInput
          style={{
            fontSize: 15,
            marginLeft: 17,
            marginRight: 30,
          }}
          value={description}
          onChangeText={setDescription}
          placeholder="Workout description"
          multiline={true} // Set multiline to true
          numberOfLines={4} // Set the number of lines you want to display
        />
        </View>

        <View
          style={{ backgroundColor: "#e3e3e3", height: 1, marginTop: 10 }}
        />

        <ScrollView style={styles.exerciseList}>
          {selectedExercises.map((exercise, index) => (
            <View key={index} style={styles.exerciseItem}>
              <Text style={styles.exerciseName}>{exercise}</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  maxLength={3}
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
                  maxLength={1}
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
          style={buttonStyles.button}
        >
          <Text style={buttonStyles.text}>Add Exercise</Text>
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
  workoutNameInput: {
    marginLeft: 15,
    marginTop: 17,
    fontSize: 28,
    fontWeight: "bold",
    height: 40,
    borderRadius: 8,
    marginBottom: 8,
  },
  editIcon: {
    marginTop: 9,
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
