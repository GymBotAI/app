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
} from "react-native";

// Assume that you have imported the selectedExercises array separately

export default function ReviewWorkoutContainer({
  selectedExercises,
  setShowModal,
}) {
  const [exerciseSets, setExerciseSets] = useState([]);

  console.log(selectedExercises)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>73:26</Text>
      </View>
      <Text style={styles.title}>Exercises</Text>

      <ScrollView style={styles.exerciseList}>
        {selectedExercises.map((exercise, index) => (
          <View key={index} style={styles.exerciseItem}>
            <Text style={styles.exerciseName}>{exercise.name}</Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F7F7F7",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  icon: {
    width: 24,
    height: 24,
  },
  time: {
    fontSize: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 20,
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
