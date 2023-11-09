// Food data
import type { Food, FoodCategory } from "./types";

import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { colors } from "$styles";

import { foodCategories, foods } from "./data";
import FoodDatabaseWindow from "./FoodDatabaseWindow";

function calculateTotalCalories(foodIds: number[]) {
  return foodIds.reduce((total, foodId) => {
    return total + foods[foodId].calories;
  }, 0);
}

export default function MealTab({
  category,
  onTotalCaloriesChange,
}: {
  category: FoodCategory;
  onTotalCaloriesChange: (newTotal: number) => void;
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFoods, setSelectedFoods] = useState<number[]>([]);

  const toggleAddFoodButton = () => {
    setIsModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View>
      <View style={styles.mealContainer}>
        <View style={styles.mealHeader}>
          <Text style={styles.mealName}>{foodCategories[category].name}</Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => toggleAddFoodButton()}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        {selectedFoods.length ? (
          <View style={styles.selectedFoodsContainer}>
            {selectedFoods.map((foodId) => {
              const food = foods[foodId];

              return (
                <View key={foodId} style={styles.selectedFood}>
                  <Text>{food.name}</Text>

                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => {
                      const newSelectedFoods = selectedFoods.filter(
                        (id) => id !== foodId
                      );
                      setSelectedFoods(newSelectedFoods);

                      onTotalCaloriesChange(
                        calculateTotalCalories(newSelectedFoods)
                      );
                    }}
                  >
                    <Text>&mdash;</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        ) : null}
      </View>

      <FoodDatabaseWindow
        category={category}
        isVisible={isModalVisible}
        onClose={closeModal}
        onFoodPress={(food) => {
          closeModal();

          const newSelectedFoods = [...selectedFoods, food];
          setSelectedFoods(newSelectedFoods);

          onTotalCaloriesChange(calculateTotalCalories(newSelectedFoods));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mealContainer: {
    flexDirection: "column",
    backgroundColor: colors.white.default,
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
  mealName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  addButton: {
    backgroundColor: colors.blue.default,
    borderRadius: 50,
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: colors.white.default,
    fontSize: 20,
  },
  selectedFoodsContainer: {
    marginLeft: 10,
    marginTop: 15,
    marginRight: 5,
  },
  selectedFood: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  removeButton: {
    backgroundColor: colors.red.default,
    borderRadius: 50,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
