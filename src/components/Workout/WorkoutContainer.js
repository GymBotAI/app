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
    bottom: 80,
    width: "90%",
    marginLeft: '5%',
    backgroundColor: "#1260de",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 50,
    elevation: 5,
  },
  addText: {
    alignSelf: "center",
    fontSize: 26,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: "#dbdbdb",
  },
});
