import React from "react";
import { View, StyleSheet } from "react-native";

import GoalSelect from "../GoalSelect";

export default function Goals({ onGoalChange }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <GoalSelect onGoalChange={onGoalChange} text="Build Muscle" />
        <GoalSelect onGoalChange={onGoalChange} text="Lose Weight" />
      </View>
      <View style={styles.row}>
        <GoalSelect onGoalChange={onGoalChange} text="Run Faster" />
        <GoalSelect onGoalChange={onGoalChange} text="Better Abs" />
      </View>
      <View style={styles.row}>
        <GoalSelect onGoalChange={onGoalChange} text="Jump Higher" />
        <GoalSelect onGoalChange={onGoalChange} text="Do a Pull Up" />
      </View>
      <View style={styles.centered}>
        <GoalSelect onGoalChange={onGoalChange} text="Other" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  centered: {
    alignItems: "center",
  },
});