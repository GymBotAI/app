import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import FoodDatabaseWindow from "./FoodDatabaseWindow";

export let selectedFoodsInfo = [];

const Meals = ({ name, onSave }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFood, setSelectedFood] = useState([]);

  const toggleAddFoodButton = () => {
    setIsModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleTabPress = (food) => {
    setSelectedFood([...selectedFood, food]);
    closeModal();
    selectedFoodsInfo.push(food);
    onSave();
  };

  return (
    <View>
      <View style={styles.mealContainer}>
        <View style={styles.mealHeader}>
          <Text style={styles.mealName}>{name}</Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => toggleAddFoodButton()}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.foodWrapper}>
          {selectedFood.map((food, index) => (
            <View style={styles.foodContainer} key={index}>
              <Text style={styles.selectedFoodName}>{food.name}</Text>
              <Text style={styles.selectedFoodDescription}>
                {food.description}
              </Text>
              <Text style={styles.selectedFoodCalories}>
                {food.calories} cal
              </Text>
              <Text style={styles.selectedFoodProtein}>
                {food.protein} g Protein
              </Text>
              <Text style={styles.selectedFoodSalt}>{food.salt} g Salt</Text>
            </View>
          ))}
        </View>
      </View>

      <FoodDatabaseWindow
        isVisible={isModalVisible}
        onClose={closeModal}
        onTabPress={handleTabPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mealListContainer: {},
  mealContainer: {
    flexDirection: "column",
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  mealHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
  },
  foodWrapper: {
    flexDirection: "column",
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
    width: 35,
    height: 35,
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
  foodWrapper: {
    flexDirection: "column",
  },
});

export default Meals;
