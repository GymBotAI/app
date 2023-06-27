import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function GymBotNavigation({ onPressChat, onPressWorkouts, onPressSettings }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPressWorkouts}>
        <Text style={styles.buttonText}>Workouts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onPressChat}>
        <Text style={styles.buttonText}>Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onPressSettings}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ddd",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
