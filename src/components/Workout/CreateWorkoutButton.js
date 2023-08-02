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

export default function CreateWorkoutButton({ handleAddWorkout }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#1877f2", "#82b7ff"]}
        style={styles.blueRectangle}
      >
        <ImageBackground
          source={require("../../../assets/dumbellbg.webp")}
          resizeMode="cover"
          style={{
            width: "110%",
            height: "110%",
            marginLeft: -15,
            marginBottom: -170,
            opacity: 0.2,
            blur: "20",
          }}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Create a Workout</Text>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.designButtonContainer}
              onPress={handleAddWorkout}
            >
              <Text style={styles.addText}>Design</Text>
              <AntDesign name="arrowright" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.createButtonContainer}
              onPress={handleAddWorkout}
            >
              <Text style={styles.addText}>Explore</Text>
              <AntDesign name="arrowright" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    borderRadius: 15,
    width: "95%",
    height: 200,
    overflow: "hidden", // Clip the inner content to avoid overflow issues
  },
  blueRectangle: {
    borderRadius: 15,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end", // Move content to the bottom
    padding: 15,
  },
  contentContainer: {
    paddingBottom: 30, // Add some padding at the bottom of the content
  },
  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 52,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonsContainer: {
    marginBottom: -30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  designButtonContainer: {
    backgroundColor: "white",
    width: "48%", // Adjust the button widths
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  createButtonContainer: {
    backgroundColor: "white",
    width: "48%", // Adjust the button widths
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  addText: {
    color: "black",
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
