import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FoodInfoTabs = ({ foodData }) => {
  return (
    <View style={styles.tabsContainer}>
      {foodData.map((food, index) => (
        <View key={index} style={styles.tab}>
          <Text style={styles.foodName}>{food.name}</Text>
          <Text style={styles.foodDescription}>{food.description}</Text>
          <View style={styles.nutritionInfo}>
            <Text style={styles.calories}>{food.calories} cal</Text>
            <Text style={styles.protein}>{food.protein} g Protein</Text>
            <Text style={styles.salt}>{food.salt} g Salt</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    marginTop: 20,
  },
  tab: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  foodName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  foodDescription: {
    fontSize: 14,
    color: "#555",
  },
  nutritionInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  calories: {
    color: "green",
    fontSize: 12,
  },
  protein: {
    color: "blue",
    fontSize: 12,
  },
  salt: {
    color: "red",
    fontSize: 12,
  },
});

export default FoodInfoTabs;