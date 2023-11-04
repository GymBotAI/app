import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useState, useEffect } from "react";

import ExerciseSelectionScreen from "./BuildMuscle";
import ReviewWorkoutContainer from "../../../components/Workout/ReviewWorkout/ReviewWorkoutContainer";

import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

import type { WorkoutSubGoal } from "../../../types/workouts";

export default function CompleteDesignContainer({ route, navigation }) {
  const { goal, subGoal } = route.params;
  const [typedText, setTypedText] = useState("");
  const [goalText, setGoalText] = useState("Select your exercises!");
  const [showModal, setShowModal] = useState(false);

  const [selectedExercises, setSelectedExercises] = useState([]);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= goalText.length) {
        setTypedText(goalText.substring(0, currentIndex));
        currentIndex++;0.
      } else {
        clearInterval(typingInterval);
      }
    }, 1); // Adjust typing speed here (milliseconds)

    return () => {
      clearInterval(typingInterval);
    };
  }, [goalText]); // Listen for changes to goalText

  return (
    <>
      {!showModal && (
        <>
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

            
            <View style={styles.container2}>
              <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttonText}>Design With AI</Text>
              </TouchableOpacity>
            </View>

            {goal == "Build Muscle" ? (
              <ExerciseSelectionScreen
                setSelectedExercises={setSelectedExercises}
                selectedExercises={selectedExercises}
                subGoal={subGoal}
              />
            ) : null}
            <TouchableOpacity
              onPress={() => setShowModal(!showModal)}
              style={[styles.button]}
            >
              <Text style={styles.text}>Continue</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {showModal && (
        <ReviewWorkoutContainer
          setShowModal={setShowModal}
          selectedExercises={selectedExercises}
          navigation={navigation}
        />
      )}
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
    bottom: 5,
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
    marginBottom: 10,
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
  container2: {
    position: 'absolute',
    width: '100%',
    left: '5%',
    top: '17%',
    zIndex: 1,
  },
  button2: {
    backgroundColor: '#3498db', // Change the background color to your preferred color
    padding: 15,
    borderRadius: 28,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // Change the text color to your preferred color
    fontSize: 20,
    fontWeight: 'bold',
  },
});
