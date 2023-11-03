import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useState, useEffect } from "react";

import ExerciseSelectionScreen from "./BuildMuscle";
import ReviewWorkoutContainer from "../ReviewWorkout/ReviewWorkoutContainer";

import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import ScreenHeader from "../../ScreenHeader";

import type { WorkoutSubGoal } from "../../../types/workouts";

export default function CompleteDesignContainer({ route, navigation }) {
  const { goal, subGoal } = route.params;
  const [typedText, setTypedText] = useState("What is your goal?");
  const [showModal, setShowModal] = useState(false);

  const [selectedExercises, setSelectedExercises] = useState([]);

  return (
    <>
      <ScreenHeader title="Workouts" />
      <View style={styles.container}>
        <View style={styles.chatContainer}>
          <LinearGradient
            colors={["#4c9afc", "#5da1fc"]} // Lighter blue gradient colors
            start={[0, 0.5]}
            end={[1, 0.5]}
            style={styles.chatBox}
          >
            <Image
              source={require("../../../../assets/circleicon.png")}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: "white",
                marginRight: 10,
              }}
            />
            <Text style={styles.chatText}>{typedText}</Text>
          </LinearGradient>
        </View>

        {goal == "Build Muscle" ? (
          <ExerciseSelectionScreen
            setSelectedExercises={setSelectedExercises}
            selectedExercises={selectedExercises}
            subGoal={subGoal}
          />
        ) : null}

        <Modal visible={showModal} style={{}}>
          <ReviewWorkoutContainer
            setShowModal={setShowModal}
            selectedExercises={selectedExercises}
            navigation={navigation}
          />
        </Modal>

        <TouchableOpacity
          onPress={() => navigation.navigate("ReviewWorkout")}
          style={[styles.button]}
        >
          <Text style={styles.text}>Continue</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  button: {
    alignSelf: "center",
    position: "absolute",
    bottom: 50,
    width: "90%",
    backgroundColor: "#1260de",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  text: {
    alignSelf: "center",
    fontSize: 24,
    paddingVertical: 10,
    color: "#dbdbdb",
    fontWeight: "bold",
  },
  chatContainer: {
    alignItems: "center",
    margin: 15,
    marginBottom: 20,
  },
  chatBox: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  chatText: {
    flex: 1, // Allow text to wrap within the available space
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
