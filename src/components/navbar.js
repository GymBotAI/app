import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

const navImages = {
  Workouts: require("../../assets/navbar/workouts.png"),
  Chat: require("../../assets/navbar/chat.png"),
  Settings: require("../../assets/navbar/settings.png"),
};

export default function GymBotNavigation({ navigation }) {
  return (
    <View style={styles.container}>
      {Object.entries(navImages).map(([name, image]) => (
        <TouchableOpacity
          key={name}
          style={styles.button}
          onPress={() => {
            navigation.navigate(name);
          }}
        >
          <Image source={image} style={styles.image} />
          <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ddd",
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: 0,
    backgroundColor: "white",
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
  },
  image: {
    width: 32,
    height: 32,
  },
});
