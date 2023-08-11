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

  let carbsGoal = 2800;

  const [foodEaten, setFoodEaten] = useState("0");
  const [exercise, setExercise] = useState("0");
  const [remainingCalories, setRemainingCalories] = useState(carbsGoal);

  const calculateTotalCalories = (list) => {
    const totalCalories = list.map(food => food.calories).reduce((sum, calories) => sum + calories, 0);
    return totalCalories;
  };

  const calculateSelectedFoods = () => {
    setFoodEaten(calculateTotalCalories(selectedFoodsInfo));
  };

  useEffect(() => {
    const calculatedCalories =
      carbsGoal - parseFloat(foodEaten) + parseFloat(exercise);

    if(calculatedCalories){setRemainingCalories(calculatedCalories);} else{setRemainingCalories(carbsGoal)}
  }, [foodEaten, exercise]);

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.progressContainer}>
            <View style={styles.circleContainer}>
              <ProgressCircle
                percent={(remainingCalories / carbsGoal) * 100}
                radius={circleRadius}
                borderWidth={8}
                color="#8ed9de"
                shadowColor="#cccccc"
                bgColor="#F5F5F5"
              >
                <FontAwesome5
                  name="carrot"
                  size={60}
                  color="#8ed9de"
                  style={styles.icon}
                />
              </ProgressCircle>
              <Text style={styles.carbsGoalText}>{"Carbs goal = " + carbsGoal}</Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#2e2e2e",
                  alignSelf: "center",
                  marginBottom: -2,
                }}
              >
                {"Remaining " + remainingCalories + " = " +
                  `${carbsGoal} - ${foodEaten} + ${exercise}`}
              </Text>
            </View>
          </View>
          <Meals name="Breakfast" onSave={calculateSelectedFoods} />
          <Meals name="Lunch" onSave={calculateSelectedFoods} />
          <Meals name="Snack" onSave={calculateSelectedFoods} />
          <Meals name="Dinner" onSave={calculateSelectedFoods} />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    overflow: "auto",
    padding: 10,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  circleContainer: {
    width: "100%",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 50,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  carbsGoalText: {
    marginTop: 20,
    fontSize: 14,
    color: "#2e2e2e",
    textAlign: "center",
    marginBottom: 5,
  },
  icon: {
    marginBottom: 5,
  },
});