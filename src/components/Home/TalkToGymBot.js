import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

const TalkToGymBotSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>Use GymBot</Text>
          <AntDesign
            name="message1"
            size={24}
            color="white"
            style={styles.icon}
          />
        </View>
        <Text style={styles.subtitleText}>
          Our specialized AI will help you craft personalized workouts that
          unlock your true potential
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Talk</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1F4E79",
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
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
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5, // Adjust the value as needed
  },
  titleText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginRight: 5,
  },
  icon: {
    marginLeft: 5, // Adjust the value as needed
  },
  subtitleText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    color: "white",
  },
  button: {
    alignItems: "center",
    width: 120,
    alignSelf: "center",
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#4bb7de",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default TalkToGymBotSection;
