import {
  Keyboard,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import Workouts from "./WorkoutTabs";
import React, { useState } from "react";

export default function ViewWorkouts({ navigation }) {
  const [workout, setWorkout] = useState();
  const [workoutItems, setWorkoutItems] = useState([]);

  const handleAddWorkout = () => {
    Keyboard.dismiss();
    setWorkoutItems([...workoutItems, workout]);
    setWorkout(null);
  };

  const completeWorkout = (index) => {};

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todays workouts:</Text>
        <View style={styles.items}>
          {workoutItems.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                oPress={() => completeWorkout(index)}
              >
                <Workouts text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a Workout"}
          value={workout}
          onChangeText={(text) => setWorkout(text)}
        />
        <TouchableOpacity onPress={() => handleAddWorkout()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    overflow: "auto",
    padding: 10,
    backgroundColor: "#F3F3F3",
  },
  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
