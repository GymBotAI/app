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
  plan,
}) {
  const lineLength = Dimensions.get("window").height - 265;

  return (
    <View
      style={[styles.container, { width: windowWidth, height: windowHeight }]}
    >
      <View style={styles.overlay} />
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <Text style={styles.planName}>{plan.name}</Text>
      <Text style={styles.planLength}>{plan.length} days</Text>
      <View style={styles.centeredBox}>
        <Text>{plan.data}</Text>
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
  centeredBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -150 }, { translateY: -170 }],
    width: 300,
    height: 350,
    borderRadius: 20,
    backgroundColor: "gray",
    justifyContent: "top",
    padding: 20,
  },
  planLength: {
    position: "absolute",
    top: "6%",
    fontWeight: "bold",
    fontSize: 15,
    color: "#646464",
    left: 40,
  },
  planName: {
    position: "absolute",
    top: "5%",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
