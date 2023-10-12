import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from "react-native";

export default function PlanInfoPage({ onClose, windowWidth, windowHeight, fillPercentage }) {
 const lineLength = Dimensions.get("window").height-200;
 const filledLength = (lineLength * fillPercentage) / 100;

  return (
    <View style={[styles.container, { width: windowWidth, height: windowHeight }]}>
      <View style={styles.overlay} />
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <View style={styles.verticalLine}>
        <View style={[styles.line, { height: lineLength }]}>
          <View style={[styles.fill, { height: filledLength }]} />
        </View>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width - 20; // Offset 20 px for symmetry
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
 },
 closeButton: {
   position: "absolute",
   top: 20,
   right: 20,
   zIndex: 1,
   width: 40,
   height: 40,
   borderRadius: 20,
   backgroundColor: "rgba(0, 0, 0, 0.5)",
   justifyContent: "center",
   alignItems: "center",
 },
 closeButtonText: {
   color: "white",
   fontSize: 18,
   fontWeight: "bold",
 },
 overlay: {
   position: "absolute",
   top: 0,
   left: 0,
   width: windowWidth,
   height: windowHeight,
   backgroundColor: "white",
 },
 verticalLine: {
   position: "absolute",
   left: 15, // Padding of 15 pixels
   top: 15,
   width: 15, // Line width
   borderRadius: 7,
   backgroundColor: "gray", // Set the line color to gray
 },
 line: {
   width: 15,
   backgroundColor: "lightgray", // Set the background color of the line
   borderRadius: 7, // Set the border radius for the line
 },
 fill: {
   backgroundColor: "blue", // Set the fill color to blue
   borderRadius: '7', // Set the border radius for the fill
 },
});