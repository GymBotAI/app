import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";

export default function CreateWorkoutButton({ handleAddWorkout }) {
  const { width, height } = Dimensions.get("window");
  const fontSize = Math.min(width, height) * 0.095;
  const fontSize2 = Math.min(width, height) * 0.055;
  const cameraSize = Math.min(width, height) * 0.065;
  const buttonPadding = Math.min(width, height) * 0.025;

  const containerHeight = Math.min(width, height) * 0.5;
  const buttonHeight = containerHeight / 2.6;
  const bottomHeight = containerHeight / 4.5;

  const linearPadding = containerHeight / 12;

  return (
    <View style={[styles.container, { height: containerHeight }]}>
      <LinearGradient
        colors={["#1877f2", "#82b7ff"]}
        style={[styles.blueRectangle, { padding: linearPadding }]}
      >
        <Text
          style={[styles.title, { fontSize }, { marginBottom: bottomHeight }]}
        >
          Create a Workout
        </Text>

        <View style={[styles.buttonsContainer, { height: buttonHeight }]}>
          <TouchableOpacity
            style={[
              styles.designButtonContainer,
              { paddingVertical: buttonPadding },
            ]}
            onPress={handleAddWorkout}
          >
            <Text style={[styles.addText, { fontSize: fontSize2 }]}>
              Design
            </Text>
            <AntDesign name="arrowright" size={cameraSize} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.designButtonContainer,
              { paddingVertical: buttonPadding },
            ]}
            onPress={handleAddWorkout}
          >
            <Text style={[styles.addText, { fontSize: fontSize2 }]}>
              Explore
            </Text>
            <AntDesign name="arrowright" size={cameraSize} color="black" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignSelf: "center",
    borderRadius: 15,
    width: "93%",
    // overflow: "hidden", // Clip the inner content to avoid overflow issues
  },
  blueRectangle: {
    borderRadius: 15,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end", // Move content to the bottom
    padding: 15,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    // Remove the marginBottom to align the text to the top
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  designButtonContainer: {
    backgroundColor: "white",
    width: "48%", // Adjust the button widths
    borderRadius: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  addText: {
    color: "black",
    fontWeight: "bold",
    marginBottom: 5,
  },
});
