import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";

export default function PlanInfoPage({
  onClose,
  windowWidth,
  windowHeight,
  fillPercentage,
}) {
  const lineLength = Dimensions.get("window").height - 265;
  const filledLength = (lineLength * fillPercentage) / 100;

  return (
    <View
      style={[styles.container, { width: windowWidth, height: windowHeight }]}
    >
      <View style={styles.overlay} />
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <View style={styles.verticalLine}>
        <View style={[styles.line, { height: lineLength }]}>
          <View style={[styles.fill, { height: filledLength }]} />
        </View>
      </View>
      <TouchableOpacity style={styles.addPlanButton}>
        <Text style={styles.addPlanButtonText}>Add Plan</Text>
      </TouchableOpacity>
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
    left: 15,
    top: 15,
    width: 15,
    borderRadius: 7,
    backgroundColor: "gray",
  },
  line: {
    width: 15,
    backgroundColor: "lightgray",
    borderRadius: 7,
  },
  fill: {
    backgroundColor: "blue",
    borderRadius: 7,
  },
  addPlanButton: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: windowWidth,
    borderRadius: 7,
    height: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  addPlanButtonText: {
    color: "white",
    fontSize: 16,
  },
});
