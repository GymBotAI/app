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

  const openRunningPage = () => {
    changeRunningPageVisibility(true);
  };
  const closeRunningPage = () => {
    changeRunningPageVisibility(false);
  };

  const handleAddWorkout = () => {
    navigation.navigate("DesignWorkout");
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <CreateWorkoutButton handleAddWorkout={handleAddWorkout} />

        <TalkToGymBotSection navigation={navigation} />
        <WorkoutList navigation={navigation} />
        <CustomPage
          isVisible={RunningPageVisibility}
          onClose={closeRunningPage}
        />
      </ScrollView>

      {/* Log Workout button */}
      <TouchableOpacity
        style={styles.addButtonContainer}
        onPress={openRunningPage}
      >
        <Text style={styles.addText}>Log Workout</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  tasksWrapper: {},
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 80,
    width: "86%",
    marginLeft: "7%",
    backgroundColor: "#1260de",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 5,
  },
  addText: {
    alignSelf: "center",
    fontSize: 23,
    fontWeight: "bold",
    paddingVertical: 10,
    color: "#dbdbdb",
  },
});
