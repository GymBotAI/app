import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PlanFinder from "./PlanFinder";

export default function Settings({ navigation }) {
  return <PlanFinder />;
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    overflow: "auto",
    padding: 10,
  },
});
