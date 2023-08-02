import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const DailyWorkout = ({}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.workoutOfTheDayText}>Workout of the Day</Text>
      </View>

      <View style={styles.bottomSection}>
        <Image
          source={require("../../../assets/accountbgdark.jpg")}
          resizeMode="cover"
          style={styles.backgroundImage}
          imageStyle={styles.backgroundImageStyle}
        />
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          marginTop: 10,
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Cardio Blast -{" "}
        </Text>
        <Text style={{ fontSize: 16, marginTop: 1.7 }}>30-45 Minutes</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    left: "10%",
    width: "80%",
    height: 200,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    overflow: "hidden", // Ensure that the background image stays within the container boundaries
  },
  topSection: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "left",
    backgroundColor: "#349beb",
    paddingVertical: 3,
    paddingHorizontal: 15,
  },
  workoutOfTheDayText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  bottomSection: {
    width: "100%",
    height: "50%",
  },
  backgroundImage: {
    top: 0,
    position: "absolute",
    width: "110%",
    height: "110%",
    opacity: 0.9,
  },
  backgroundImageStyle: {
    opacity: 0.9, // Adjust the opacity as per your preference
  },
});

export default DailyWorkout;
