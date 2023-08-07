import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import CreateWorkoutButton from "./CreateWorkoutButton";
import WorkoutList from "./WorkoutList";
import { circularColour } from "../../styles";
import TalkToGymBotSection from "./TalkToGymBot";

export default function ViewWorkouts({ navigation }) {
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);

  const handleAddWorkout = () => {
    navigation.navigate("DesignWorkout")
  }

  return (
    <ScrollView style={styles.container}>

        <CreateWorkoutButton handleAddWorkout={handleAddWorkout}/>

        <View style={styles.tasksWrapper}>

        <TalkToGymBotSection navigation={navigation}/>

        <WorkoutList />

        </View>

    </ScrollView>
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
