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
import { circularColour } from "../../styles";
import TalkToGymBotSection from "./TalkToGymBot";

export default function ViewWorkouts({ navigation }) {
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);

  const handleAddWorkout = () => {
    navigation.navigate("DesignWorkout");
  };

  const handleLogWorkout = () => {
    // Implement the logic to log the workout
    console.log("Workout logged!");
  };

  return (
    <>
    <ScrollView style={styles.container}>
      <CreateWorkoutButton handleAddWorkout={handleAddWorkout} />

      <View style={styles.tasksWrapper}>
        <TalkToGymBotSection navigation={navigation} />
        <WorkoutList />
      </View>

    </ScrollView>
    
      {/* Log Workout button */}
      <TouchableOpacity style={styles.addButtonContainer} onPress={handleLogWorkout}>
          <Text style={styles.addText}>Log Workout</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
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
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    backgroundColor: "blue",
    borderRadius: 30,
    width: '60%',
    marginLeft: '20%',
  },
  addText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
