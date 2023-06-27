import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
// import { AntDesign } from "@expo/vector-icons";

export default function ScreenHeader({ title }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    marginBottom: 10,
    height: 90,
    borderWidth: .5,
    borderColor: '#c9c9c9',
  },
  backButton: {
    paddingRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
