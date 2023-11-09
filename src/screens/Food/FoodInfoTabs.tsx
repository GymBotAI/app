import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "../../components/styles";

import { foods } from "./data";

export default function FoodInfoTabs({
  foods: foodIds,
  onFoodPress,
}: {
  foods: number[];
  onFoodPress: (food: number) => void;
}) {
  return (
    <View style={styles.tabsContainer}>
      {foodIds.map((foodId, index) => {
        const food = foods[foodId];

        return (
          <TouchableOpacity
            key={index}
            style={styles.tab}
            onPress={() => onFoodPress(foodId)}
          >
            <Text style={styles.foodName}>{food.name}</Text>
            <Text style={styles.foodDescription}>{food.description}</Text>
            <View style={styles.nutritionInfo}>
              <Text style={styles.calories}>{food.calories} cal</Text>
              <Text style={styles.protein}>{food.protein}g Protein</Text>
              <Text style={styles.salt}>{food.salt}g Salt</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  tab: {
    backgroundColor: colors.grey.lightest,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  foodName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  foodDescription: {
    fontSize: 14,
    color: colors.black.lighter,
  },
  nutritionInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  calories: {
    color: colors.green.default,
    fontSize: 12,
  },
  protein: {
    color: colors.blue.default,
    fontSize: 12,
  },
  salt: {
    color: colors.red.default,
    fontSize: 12,
  },
});
