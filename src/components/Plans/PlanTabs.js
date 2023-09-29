import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PlanTabs({ text }) {
  return (
    <View style={styles.rectangle}>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    width: "80%",
    height: 100,
    backgroundColor: "#888",
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
