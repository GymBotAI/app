import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ScreenHeader({ title, onBackPress, onSavePress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.saveButton} onPress={onSavePress}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Use 'space-between' to push buttons to the edges
    paddingTop: 40,
    height: 90,
    borderWidth: 0.5,
    borderColor: "#c9c9c9",
  },
  backButton: {
    paddingLeft: 15, // Adjust the padding to separate the "Back" button from the edge
  },
  saveButton: {
    paddingRight: 15, // Adjust the padding to separate the "Save" button from the edge
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  buttonText: {
    fontSize: 16,
    color: "#007AFF",
  },
});
