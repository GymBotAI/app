import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function GymBotNavigation({ navigation }) {
  const navIcons = {
    Home: "home",
    Workouts: "dumbbell",
    Chat: "comment",
    Settings: "cog",
  };

  return (
    <View style={styles.container}>
      {Object.entries(navIcons).map(([name, iconName]) => (
        <TouchableOpacity
          key={name}
          style={styles.button}
          onPress={() => {
            navigation.navigate(name);
          }}
        >
          <FontAwesome5 name={iconName} size={27} color="#333" style={styles.icon} />
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
  icon: {
    marginBottom: 3,
  },
});
