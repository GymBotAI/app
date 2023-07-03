import React from "react";
import { View, StyleSheet } from "react-native";

import GoalSelect from "../GoalSelect";

const Goals = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <GoalSelect text="Build Muscle" />
        <GoalSelect text="Lose Weight" />
      </View>
      <View style={styles.row}>
        <GoalSelect text="Run Faster" />
        <GoalSelect text="Better Abs" />
      </View>
      <View style={styles.row}>
        <GoalSelect text="Jump Higher" />
        <GoalSelect text="Do a Pull Up" />
      </View>
      <View style={styles.centered}>
        <GoalSelect text="Other" />
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

export default Goals;
