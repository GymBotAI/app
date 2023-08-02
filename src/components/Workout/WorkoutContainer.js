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
import CreateWorkoutButton from "./CreateWorkoutButton";
import WorkoutList from "./WorkoutList";
import { circularColour } from "../../styles";
import TalkToGymBotSection from "./TalkToGymBot";

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

  const handleWorkoutsPress = (index) => {
    const updatedWorkouts = [...selectedWorkouts];
    const currentColor = updatedWorkouts[index].circleColor;
    updatedWorkouts[index].circleColor =
      currentColor === "green" ? circularColour : "green";
    setSelectedWorkouts(updatedWorkouts);
  };

  return (
    // <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      {!showAddWorkoutScreen && (
        <CreateWorkoutButton handleAddWorkout={handleAddWorkout} />
      )}
      {!showAddWorkoutScreen && (
        <View style={styles.tasksWrapper}>
        <TalkToGymBotSection navigation={navigation}/>
          <WorkoutList />
        </View>
      )}
      {showAddWorkoutScreen && (
        <AddWorkoutScreen
          onClose={handleAddWorkoutScreenClose}
          onWorkoutSelect={handleWorkoutSelect}
        />
      )}
    </View>
    // </ScrollView>
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
