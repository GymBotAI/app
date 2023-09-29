import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
} from "react-native";

export default function PlanInfoPage({ onClose, windowWidth, windowHeight }) {
 return (
   <View style={[styles.container, { width: windowWidth, height: windowHeight }]}>
     <View style={styles.overlay} />
     <TouchableOpacity style={styles.closeButton} onPress={onClose}>
       <Text style={styles.closeButtonText}>X</Text>
     </TouchableOpacity>
   </View>
 );
}

const windowWidth = Dimensions.get("window").width; //IDK why but if u want symetry, you have to offset 20 px
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
});