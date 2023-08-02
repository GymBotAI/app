import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

import {Image} from "expo-image"

const WorkoutBoxLarge = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Workout of the Day</Text>
      <TouchableOpacity style={styles.workoutBoxLarge} onPress={() => console.log("Workout of the Day pressed!")}>
        <Image
          source={require("../../../assets/ingymbg.jpg")}
          style={{
            width: "100%",
            height: "100%",
            marginLeft: -15,
            borderRadius: 10,
          }}
        />
        <View style={styles.whiteBlock}>
            <Text style={styles.workoutTitle}>Knee Building  ||  45 Minutes</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "95%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    paddingLeft: 15,
    paddingBottom: 10,
  },
  workoutBoxLarge: {
    width: "92%",
    height: 175, // Adjust the height for the larger version
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    marginHorizontal: 10,
    alignSelf: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  titleSection: {
    width: "100%",
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black", // Change the text color to match the titleText
    textAlign: "left",
    padding: 10,
  },
  whiteBlock: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 40, // Height of the white section
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default WorkoutBoxLarge;
