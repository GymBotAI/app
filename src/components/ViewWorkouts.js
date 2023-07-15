import React, { useState } from "react";
import {
  Keyboard,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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
          <View style={styles.addButtonContainer}>
            <TouchableOpacity
              onPress={handleAddWorkout}
              style={styles.addButton}
            >
              <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
          </View>
        )}
        {showAddWorkoutScreen && (
          <AddWorkoutScreen
            onClose={handleAddWorkoutScreenClose}
            onWorkoutSelect={handleWorkoutSelect}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  tasksWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  addText: {
    color: "white",
    fontSize: 30,
  },
});
