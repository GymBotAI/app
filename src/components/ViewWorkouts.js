import React, { useState } from "react";
import {
  Keyboard,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import AddWorkoutScreen from "./AddWorkoutScreen";

export default function ViewWorkouts({ navigation }) {
  const [showAddWorkoutScreen, setShowAddWorkoutScreen] = useState(false);

  const handleAddWorkout = () => {
    setShowAddWorkoutScreen(true);
  };

  const handleAddWorkoutScreenClose = () => {
    setShowAddWorkoutScreen(false);
  };

  return (
    <View style={styles.container}>
      {!showAddWorkoutScreen && (
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's workouts:</Text>
        </View>
      )}
      {!showAddWorkoutScreen && (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TouchableOpacity onPress={handleAddWorkout}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )}
      {showAddWorkoutScreen && (
        <AddWorkoutScreen onClose={handleAddWorkoutScreenClose} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F3F3F3",
  },
  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
    zIndex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});
