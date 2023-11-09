import { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  StatusBar,
} from "react-native";

import { colors } from "$styles";

// Food data
import { foodCategories } from "./data";

import { FontAwesome5 } from "@expo/vector-icons";
import ProgressCircle from "react-native-progress-circle";

import ScreenHeader from "$components/ScreenHeader";
import MealTab from "./MealTab";

import type { Food, FoodCategory } from "./types";

export default function Workouts() {
  const screenWidth = Dimensions.get("window").width;

  const circleRadiusPercentage = 0.2;
  const circleRadius = screenWidth * circleRadiusPercentage;

  const calsGoal = 2800;

  const [totalCaloriesPerCategory, setTotalCaloriesPerCategory] = useState(
    Object.fromEntries(
      Object.keys(foodCategories).map((id) => [id, 0])
    ) as Record<FoodCategory, number>
  );

  const totalCalories = Object.values(totalCaloriesPerCategory).reduce(
    (total, calories) => total + calories,
    0
  );
  const remainingCalories = calsGoal - totalCalories;

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <ScreenHeader title="Food" />

      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.circleContainer}>
              <ProgressCircle
                percent={(remainingCalories / calsGoal) * 100}
                radius={circleRadius}
                borderWidth={8}
                color={colors.grey.lighter}
                shadowColor={colors.orange.default}
                bgColor={colors.grey.lightest}
              >
                <FontAwesome5
                  name="carrot"
                  size={64}
                  color={colors.orange.default}
                  style={styles.icon}
                />
              </ProgressCircle>
              <Text style={styles.calsGoalText}>Calories Goal</Text>
              <Text style={styles.remainingCalories}>
                {remainingCalories} Remaining
              </Text>
            </View>

            {(Object.keys(foodCategories) as FoodCategory[]).map((id) => (
              <MealTab
                key={id}
                category={id}
                onTotalCaloriesChange={(calories) => {
                  setTotalCaloriesPerCategory({
                    ...totalCaloriesPerCategory,
                    [id]: calories,
                  });
                }}
              />
            ))}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>

      <StatusBar barStyle="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  circleContainer: {
    width: "100%",
    backgroundColor: colors.grey.lightest,
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  calsGoalText: {
    marginTop: 15,
    fontSize: 16,
    color: colors.black.default,
    textAlign: "center",
  },
  remainingCalories: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.orange.default,
    textAlign: "center",
  },
  icon: {
    marginBottom: 10,
  },
});
