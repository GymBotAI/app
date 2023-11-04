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

// import ScreenHeader from "../../ScreenHeader";
import ReviewHeader from "./ReviewHeader";
import { Entypo } from "@expo/vector-icons";

import { buttonStyles } from "../../../components/styles";

export default function ReviewWorkoutContainer({
  selectedExercises,
  setShowModal,
  navigation,
}) {
  const [workoutName, setWorkoutName] = useState("");
  const [description, setDescription] = useState("");
  const [exerciseSets, setExerciseSets] = useState([]);
  const [exerciseReps, setExerciseReps] = useState([]);
  const [inputFilled, setInputFilled] = useState(false);

  const saveWorkout = () => {
    console.log(selectedExercises);
    console.log(exerciseSets);
    console.log(exerciseReps);
    navigation.navigate("Workouts");
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <ReviewHeader
        title="Review Workout"
        onSavePress={saveWorkout}
        onBackPress={goBack}
      />
      <View style={styles.container}>
        <View>
          <View style={styles.topSection}>
            <TextInput
              maxLength={20}
              style={styles.workoutNameInput}
              value={workoutName}
              onChangeText={(e) => {
                setWorkoutName(e);
                setInputFilled(!!e);
              }}
              placeholder="Untitled Workout"
              placeholderTextColor={"magenta"}
            />
            <Entypo
              name="edit"
              size={24}
              color={inputFilled ? "magenta" : "magenta"} // Set color based on inputFilled
              style={styles.editIcon}
            />
          </View>

          <TextInput
            style={{
              fontSize: 15,
              marginLeft: 17,
              marginRight: 30,
              marginBottom: 10,
            }}
            value={description}
            onChangeText={setDescription}
            placeholder="Workout description"
            multiline={true} // Set multiline to true
            maxLength={150}
            numberOfLines={4} // Set the number of lines you want to display
          />
        </View>

        <View
          style={{
            backgroundColor: "magenta",
            height: 45,
            borderColor: "magenta",
            flexDirection: "row",
            borderWidth: 1,
            borderBottomColor: "magenta",
            borderTopColor: "magenta",
            justifyContent: "flex-end",
          }}
        >
          <Text
            style={{
              marginRight: 145,
              marginTop: 11.5,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Exercise
          </Text>
          <Text
            style={{
              marginRight: 40,
              marginTop: 11.5,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Sets
          </Text>
          <Text
            style={{
              marginRight: 20,
              marginTop: 11.5,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Reps
          </Text>
        </View>

        <ScrollView style={styles.exerciseList}>
          {selectedExercises.map((exercise, index) => (
            <View key={index} style={styles.exerciseItem}>
              <Text style={styles.exerciseName}>{exercise}</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  maxLength={1}
                  style={styles.inputSets}
                  keyboardType="numeric"
                  value={exerciseSets[index]}
                  onChangeText={(value) => {
                    const updatedSets = [...exerciseSets];
                    updatedSets[index] = value;
                    setExerciseSets(updatedSets);
                  }}
                />
                <Text>x</Text>

                <TextInput
                  maxLength={3}
                  style={styles.inputReps}
                  keyboardType="numeric"
                  value={exerciseReps[index]} // Use reps value from state
                  onChangeText={(value) => {
                    const updatedReps = [...exerciseReps];
                    updatedReps[index] = value;
                    setExerciseReps(updatedReps);
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "magenta",
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
  },
  editIcon: {
    marginTop: 17,
    marginLeft: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  exerciseList: {
    borderRadius: 10,
    marginBottom: 20,
    paddingRight: 3,
  },
  exerciseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "magenta",
  },
  exerciseName: {
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputSets: {
    borderRadius: 15,
    fontSize: 16,
    height: 35,
    width: 50,
    textAlign: "center",
    marginRight: 10,
    backgroundColor: "magenta",
    color: "magenta",
  },
  inputReps: {
    borderRadius: 15,
    fontSize: 16,
    height: 35,
    width: 50,
    textAlign: "center",
    marginLeft: 10,
    backgroundColor: "magenta",
    color: "magenta",
  },
});
