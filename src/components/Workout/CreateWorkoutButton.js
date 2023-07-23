import React from "react";
import { View, TouchableOpacity, Text, ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons"; // Import AntDesign icons

export default function CreateWorkoutButton({ handleAddWorkout }) {
  return (
    <TouchableOpacity
      style={styles.addButtonContainer}
      onPress={handleAddWorkout}
    >
      <LinearGradient colors={["#99a8ff", "#193bff"]} style={styles.blueRectangle}>
        <ImageBackground
          source={require("../../../assets/dumbellbg.webp")}
          resizeMode="cover"
          style={{
            width: "120%",
            height: "128%",
            marginLeft: -15,
            opacity: 0.3,
          }}
        />

            <Text style={styles.addText}>Click to design a workout</Text>

            <AntDesign name="arrowright" size={24} color="white" style={styles.icon} />

        {/* Icon to indicate the action */}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  icon: {
    marginBottom: -5,
  },
  blueRectangle: {
    borderRadius: 15,
    padding: 15,
    paddingBottom: 13,
    width: '92%',
    height: 200,
    alignItems: "left",
    justifyContent: "flex-end",
  },
  addText: {
    bottom: 5,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
