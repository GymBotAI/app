import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView } from "react-native";
import FoodInfoTabs from "./FoodInfoTabs";

const FoodDatabaseWindow = ({ isVisible, onClose, onTabPress }) => {
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
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.spacer} />
          <FoodInfoTabs foodData={foodData} onTabPress={onTabPress} />
          <View style={styles.spacer} />
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Had to use rgba cuz I could figure it out with hex
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
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  spacer: {
    flex: 1,
  },
});

export default FoodDatabaseWindow;
