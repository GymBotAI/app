import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import CreateWorkoutButton from "./CreateWorkoutButton";
import WorkoutList from "./WorkoutList";
import TalkToGymBotSection from "./TalkToGymBot";
import CustomPage from "./RunningPage";

export default function ViewWorkouts({ navigation }) {
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);
  const [RunningPageVisibility, changeRunningPageVisibility] = useState(false);
  const [workoutButtonsVisible, setWorkoutButtonsVisible] = useState(false);

  const openRunningPage = () => {
    changeRunningPageVisibility(true);
  };

  const closeRunningPage = () => {
    changeRunningPageVisibility(false);
  };

  const handleAddWorkout = () => {
    navigation.navigate("DesignWorkout");
  };

  const toggleWorkoutButtons = () => {
    setWorkoutButtonsVisible(!workoutButtonsVisible);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <CreateWorkoutButton handleAddWorkout={handleAddWorkout} />

        <TalkToGymBotSection navigation={navigation} />
        <WorkoutList navigation={navigation} />
        <CustomPage isVisible={RunningPageVisibility} onClose={closeRunningPage} />
      </ScrollView>

      <TouchableOpacity style={styles.addButtonContainer} onPress={toggleWorkoutButtons}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>

      {workoutButtonsVisible && (
        <View style={styles.workoutButtonsContainer}>
          <TouchableOpacity onPress={openRunningPage}>
            <Text style={styles.workoutOptionsText}>Start a Run</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.workoutOptionsText}>Log Workout</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 80,
    width: "1%",
    marginLeft: "7%",
    backgroundColor: "#1260de",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 5,
  },
  workoutButtonsContainer: {
    position: "absolute",
    bottom: 130,
    marginLeft: "7%",
    backgroundColor: "#fff",
    borderRadius: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 5,
  },
  workoutOptionsText: {
   alignSelf: "center",
   fontSize: 13,
   fontWeight: "bold",
   paddingVertical: 10,
   color: "#000",
 },
  addText: {
    alignSelf: "center",
    fontSize: 23,
    fontWeight: "bold",
    paddingVertical: 10,
    color: "#dbdbdb",
  },
});

