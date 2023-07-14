import React, { useState } from "react";
import {
  Keyboard,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Workouts from "./WorkoutTabs";
import AddWorkoutScreen from "./AddWorkoutScreen";

export default function ViewWorkouts({ navigation }) {
  const [showAddWorkoutScreen, setShowAddWorkoutScreen] = useState(false);
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);

  const handleAddWorkout = () => {
    setShowAddWorkoutScreen(true);
  };

  const handleAddWorkoutScreenClose = () => {
    setShowAddWorkoutScreen(false);
  };

  const handleWorkoutSelect = (workout) => {
    setSelectedWorkouts([...selectedWorkouts, workout]);
  };

  return (
    <View style={styles.container}>
      {!showAddWorkoutScreen && (
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's workouts:</Text>
          {selectedWorkouts.map((workout, index) => (
            <Workouts key={index} title={workout.title} text={workout.text} />
          ))}
        </View>
      )}
      {!showAddWorkoutScreen && (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TouchableOpacity onPress={handleAddWorkout}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )}

      {showAddWorkoutScreen && (
        <AddWorkoutScreen
          onClose={handleAddWorkoutScreenClose}
          onWorkoutSelect={handleWorkoutSelect} // Pass the onWorkoutSelect function as a prop
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F3F3F3",
  },
  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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
  scrollbarContainer: {
   position: "absolute",
   top: 0,
   right: 0,
   bottom: 0,
   width: 10,
   justifyContent: "flex-end",
   alignItems: "center",
 },
 scrollbar: {
   backgroundColor: "rgba(0, 0, 0, 0.2)",
   width: 10,
   borderRadius: 5,
 },
});