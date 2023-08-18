import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import ProgressCircle from "react-native-progress-circle";
import Meals, { selectedFoodsInfo } from "./MealTabs"


export default function Settings({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const circleRadiusPercentage = 0.20;
  const circleRadius = screenWidth * circleRadiusPercentage;

  let calsGoal = 2800;

  const [foodEaten, setFoodEaten] = useState("0");
  const [exercise, setExercise] = useState("0");
  const [remainingCalories, setRemainingCalories] = useState(calsGoal);

  const calculateTotalCalories = (list) => {
    const totalCalories = list.map(food => food.calories).reduce((sum, calories) => sum + calories, 0);
    return totalCalories;
  };

  const calculateSelectedFoods = () => {
    setFoodEaten(calculateTotalCalories(selectedFoodsInfo));
  };

  useEffect(() => {
    const calculatedCalories =
      calsGoal - parseFloat(foodEaten) + parseFloat(exercise);

    if(calculatedCalories){setRemainingCalories(calculatedCalories);} else{setRemainingCalories(calsGoal)}
  }, [foodEaten, exercise]);

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.circleContainer}>
            <ProgressCircle
              percent={(remainingCalories / calsGoal) * 100}
              radius={circleRadius}
              borderWidth={8}
              color="#cccccc"
              shadowColor="#8ed9de"
              bgColor="#F5F5F5"
            >
              <FontAwesome5 name="carrot" size={60} color="#8ed9de" style={styles.icon} />
            </ProgressCircle>
            <Text style={styles.calsGoalText}>Calories Goal</Text>
            <Text style={styles.remainingCalories}>
              {remainingCalories} Remaining
            </Text>
          </View>

          <Meals name="Breakfast" onSave={calculateSelectedFoods} />

          <Meals name="Lunch" onSave={calculateSelectedFoods} />

          <Meals name="Dinner" onSave={calculateSelectedFoods} />

          <Meals name="Other" onSave={calculateSelectedFoods} />

        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  circleContainer: {
    width: "100%",
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  calsGoalText: {
    marginTop: 15,
    fontSize: 16,
    color: "#2e2e2e",
    textAlign: "center",
  },
  remainingCalories: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#8ed9de",
    textAlign: "center",
  },
  icon: {
    marginBottom: 10,
  },
});