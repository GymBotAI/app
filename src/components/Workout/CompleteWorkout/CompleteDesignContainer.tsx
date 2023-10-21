import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useState } from "react";

import ExerciseSelectionScreen from "./BuildMuscle";

import type { WorkoutSubGoal } from "../../../types/workouts";

export default function CompleteDesignContainer ({
  route,
  navigation,
}) {
  const { goal, subGoal } = route.params;

  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      {goal == "Build Muscle" ? (
        <ExerciseSelectionScreen subGoal={subGoal} />
      ) : null}

      <Modal visible={showModal} style={{}}>
        <Text
        style={{fontSize: 150}}>Hi</Text>
      </Modal>

      <TouchableOpacity onPress={() => setShowModal(!showModal)} style={[styles.button]}>
        <Text style={styles.text}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

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
});
