import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

const navImages = {
  Home: require("../../assets/user.png"),
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
    paddingTop: 5,
    paddingBottom: 25,
    paddingHorizontal: 0,
    backgroundColor: "#F5F5F5",
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#333",
  },
  image: {
    marginBottom: 3,
    width: 27,
    height: 27,
  },
});
