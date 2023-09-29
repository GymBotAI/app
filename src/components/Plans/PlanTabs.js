import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PlanTabs({ text, length }) {
  return (
    <View style={styles.rectangle}>
      <Text>{text}</Text>
      <View style={styles.lengthContainer}>
        <View style={styles.lengthBox}>
          <Text style={styles.lengthText}>{length}</Text>
        </View>
      </View>
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
    flexDirection: "row",
  },
  lengthContainer: {
    backgroundColor: "darkgray",
    borderRadius: 10,
    marginLeft: 10,
    padding: 5,
  },
  lengthBox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
  },
  lengthText: {
    color: "white",
    fontSize: 16,
  },
});
