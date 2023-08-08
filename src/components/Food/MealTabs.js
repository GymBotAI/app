import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";

const Meals = ({ name }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddFoodButtonVisible, setAddFoodButtonVisible] = useState(false);

  const toggleAddFoodButton = () => {
    setAddFoodButtonVisible(!isAddFoodButtonVisible);
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
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

      {isAddFoodButtonVisible && (
      <View style={styles.foodContainer}>
        <TouchableOpacity
          style={styles.addFoodButton}
          onPress={openModal}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={closeModal}
          >
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
});

export default Meals;
