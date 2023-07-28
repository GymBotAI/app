import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const TalkToGymBotSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Talk to GymBot</Text>
        <Text style={styles.subtitleText}>to craft workouts suited to your specific needs</Text>
      </View>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Talk</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  textContainer: {
    marginBottom: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subtitleText: {
    fontSize: 16,
    color: "#666",
  },
  button: {
    alignItems: "center",
    width: 120,
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#4bb7de'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default TalkToGymBotSection;
