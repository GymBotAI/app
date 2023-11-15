import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { colors } from "$styles";

import ScreenHeader from "$components/ScreenHeader";
import { bothExercises, lowerExercises, upperExercises } from "./data";
import ExerciseSelectionScreen from "./ExerciseSelection";
import ReviewWorkoutContainer from "./ReviewWorkoutContainer";

import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

let exercisesToDisplay = [];

export default function CompleteDesignContainer({ route, navigation }) {
  const { subGoal } = route.params;
  const [typedText, setTypedText] = useState("");
  const [goalText, setGoalText] = useState("Select your exercises!");
  const [showModal, setShowModal] = useState(false);

  const [selectedExercises, setSelectedExercises] = useState([]);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= goalText.length) {
        setTypedText(goalText.substring(0, currentIndex));
        currentIndex++;
        0;
      } else {
        clearInterval(typingInterval);
      }
    }, 1); // Adjust typing speed here (milliseconds)

    return () => {
      clearInterval(typingInterval);
    };
  }, [goalText]); // Listen for changes to goalText  let exercisesToDisplay = [];

  if (subGoal === "Upper") {
    exercisesToDisplay = upperExercises;
  } else if (subGoal === "Lower") {
    exercisesToDisplay = lowerExercises;
  } else if (subGoal === "Both") {
    exercisesToDisplay = bothExercises;
  }

  return (
    <>
      {!showModal && (
        <>
          <ScreenHeader title="Workouts" />
          <View style={styles.container}>
            <View style={styles.chatContainer}>
              <LinearGradient
                colors={[colors.blue.default, colors.blue.lighter]} // Lighter blue gradient colors
                start={[0, 0.5]}
                end={[1, 0.5]}
                style={styles.chatBox}
              >
                <Image
                  source={require("$assets/circleicon.png")}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    borderWidth: 1,
                    borderColor: colors.white.default,
                    marginRight: 10,
                  }}
                />
                <Text style={styles.chatText}>{typedText}</Text>
              </LinearGradient>
            </View>

            {/* <View style={styles.container2}>
              <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttonText}>Design With AI</Text>
              </TouchableOpacity>
            </View> */}

            <ExerciseSelectionScreen
              setSelectedExercises={setSelectedExercises}
              selectedExercises={selectedExercises}
              exercisesToDisplay={exercisesToDisplay}
            />
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
    backgroundColor: colors.grey.lightest,
  },
  button: {
    alignSelf: "center",
    position: "absolute",
    bottom: 5,
    width: "90%",
    backgroundColor: colors.blue.default,
    borderRadius: 8,
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  text: {
    alignSelf: "center",
    fontSize: 24,
    paddingVertical: 10,
    color: colors.grey.lighter,
    fontWeight: "bold",
  },
  chatContainer: {
    alignItems: "center",
    margin: 15,
    marginBottom: 10,
  },
  chatBox: {
    backgroundColor: colors.white.default,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  chatText: {
    flex: 1, // Allow text to wrap within the available space
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white.default,
  },
  container2: {
    position: "absolute",
    width: "100%",
    left: "5%",
    top: "17%",
    zIndex: 1,
  },
  button2: {
    backgroundColor: colors.blue.lighter, // Change the background color to your preferred color
    padding: 15,
    borderRadius: 28,
    width: "90%",
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white.default, // Change the text color to your preferred color
    fontSize: 20,
    fontWeight: "bold",
  },
});
