import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import FoodInfoTabs from "./FoodInfoTabs";

const FoodDatabaseWindow = ({ isVisible, onClose }) => {
    const foodData = [
        {
          name: "Food 1",
          description: "Description for Food 1",
          calories: 150,
          protein: 10,
          salt: 1,
        },
        {
          name: "Food 2",
          description: "Description for Food 2",
          calories: 200,
          protein: 15,
          salt: 0.5,
        },
      ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={onClose}
        >
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
        <FoodInfoTabs foodData={foodData} />

      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    fontSize: 24,
  },
});

export default FoodDatabaseWindow;
