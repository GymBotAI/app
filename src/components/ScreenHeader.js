import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

export default function ScreenHeader({ title, navigation }) {
  const handlePressBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handlePressBack}>
        <Text>Back</Text>
        
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ddd",
    paddingHorizontal: 10,
    height: 60,
  },
  backButton: {
    paddingRight: 10,
  },
  backIcon: {
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
