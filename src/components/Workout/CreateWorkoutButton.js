import React from "react";
import { View, TouchableOpacity, Text, ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CreateWorkoutButton({ handleAddWorkout }) {
  return (
    <TouchableOpacity
      style={styles.addButtonContainer}
      onPress={handleAddWorkout}
    >

    
        {/* <LinearGradient colors={["blue", "black"]} style={{ flex: 1 }}>
                <View style={{ flex: 1 }} />
                </ImageBackground> */}

    <LinearGradient colors={["#99a8ff", "#193bff"]} style={styles.blueRectangle}>

    <ImageBackground
                source={require("../../../assets/dumbellbg.webp")}
                resizeMode="cover"
                style={{
                    width: "120%",
                    height: "123%",
                    marginLeft: -15,
                    opacity: 0.3, // Adjust the opacity as per your preference
                }}
                />
        <Text style={styles.addText}>Design your workout</Text>
      </LinearGradient>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  blueRectangle: {
    borderRadius: 15,
    padding: 15,
    paddingBottom: 13,
    width: '92%',
    height: 160,
    alignItems: "left",
    justifyContent: "flex-end",
  },
  addText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
