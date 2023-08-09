import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import FoodDatabaseWindow from "./FoodDatabaseWindow"; // Import the new component

const Meals = ({ name }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const toggleAddFoodButton = () => {
    setIsModalVisible(!isModalVisible);
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleTabPress = (food) => {
    setSelectedFood(food);
    closeModal();
  };

  return (
    <View>
      <View style={styles.mealContainer}>
        <Text style={styles.mealName}>{name}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => toggleAddFoodButton()}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {selectedFood && (
        <View style={styles.foodContainer}>
          <Text style={styles.selectedFoodName}>{selectedFood.name}</Text>
          <Text style={styles.selectedFoodDescription}>{selectedFood.description}</Text>
          <Text style={styles.selectedFoodCalories}>{selectedFood.calories} cal</Text>
          <Text style={styles.selectedFoodProtein}>{selectedFood.protein} g Protein</Text>
          <Text style={styles.selectedFoodSalt}>{selectedFood.salt} g Salt</Text>
        </View>
      )}

      <FoodDatabaseWindow
        isVisible={isModalVisible}
        onClose={closeModal}
        onTabPress={handleTabPress}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  mealListContainer:{

  },
  mealContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 5,
    marginBottom: -7,
  },
  foodContainer: {
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
  addFoodButton: {
    backgroundColor: "orange",
    borderRadius: 50,
    width: 40,
    height: 40,
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
  selectedFoodName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  selectedFoodDescription: {
    fontSize: 14,
    color: "#555",
  },
  selectedFoodCalories: {
    color: "green",
    fontSize: 12,
  },
  selectedFoodProtein: {
    color: "blue",
    fontSize: 12,
  },
  selectedFoodSalt: {
    color: "red",
    fontSize: 12,
  },
});

export default Meals;
