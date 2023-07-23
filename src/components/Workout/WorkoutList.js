import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

const WorkoutList = () => {
  const squaresData = [
    { id: 1, text: "Square 1" },
    { id: 2, text: "Square 2" },
    { id: 3, text: "Square 3" },
    { id: 4, text: "Square 4" },
    { id: 5, text: "Square 5" },
    // Add more squares as needed
  ];

  return (
    <>
    <Text style={styles.sectionTitle}>Today's workouts:</Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {squaresData.map((square) => (
          <View key={square.id} style={styles.square}>
            <Text style={styles.squareText}>{square.text}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  squareText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 15,
  },
});

export default WorkoutList;
