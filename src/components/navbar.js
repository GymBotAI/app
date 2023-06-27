import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

export default function GymBotNavigation({ onPressChat, onPressWorkouts, onPressSettings }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPressWorkouts}>
        <Image
            source={require("../../assets/navbar/workout.png")}
            style={styles.image}
            />
        <Text style={styles.buttonText}>Workouts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onPressChat}>
        <Image
            source={require("../../assets/navbar/chat.png")}
            style={styles.image}
        />
        <Text style={styles.buttonText}>Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onPressSettings}>
        <Image
            source={require("../../assets/navbar/settings.png")}
            style={styles.image}
        />
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
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: 0,
    backgroundColor: "white",
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#333",
  },
  image: {
    width: 40,
    height: 40,
}
});
