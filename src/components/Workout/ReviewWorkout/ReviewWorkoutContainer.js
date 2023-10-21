import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import ExerciseSelectionScreen from "./BuildMuscle";


const ReviewWorkoutContainer = () => {
  return (
    <View style={styles.container}>
        
      <TouchableOpacity style={[styles.button]}>
        <Text style={styles.text}>Save</Text>
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

export default WorkoutSelectionScreen;
