import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


const Meals = ({ name }) => {
  const [description, setDescription] = useState("");

  return (
    <View style={styles.mealContainer}>
      <Text style={styles.mealName}>{name}</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setDescription("Sample description")}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      {description !== "" && (
        <Text style={styles.description}>{description}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mealContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  mealName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: "#2196F3",
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 20,
  },
  description: {
    marginTop: 5,
    fontSize: 12,
    color: "#555",
  },
});

export default Meals;