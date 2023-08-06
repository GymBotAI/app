import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons'; 

import NavBarIcon from "./navbarOption";

export default function GymBotNavigation({ navigation, currentScreen }) {
  const navIcons = [
    ["Home", "home"],
    ["Plans", "clipboard"],
    ["Workouts", "dumbbell"],
    ["Food", "food"],
    ["Chat", "comment"]
  ];

  return (
    <View style={styles.container}>
      <NavBarIcon navigation={navigation} currentScreen={currentScreen} name={navIcons[0][0]} iconName={navIcons[0][1]} />
      <NavBarIcon navigation={navigation} currentScreen={currentScreen} name={navIcons[1][0]} iconName={navIcons[1][1]} />
      <NavBarIcon navigation={navigation} currentScreen={currentScreen} name={navIcons[2][0]} iconName={navIcons[2][1]} />
      <NavBarIcon navigation={navigation} currentScreen={currentScreen} name={navIcons[3][0]} iconName={navIcons[3][1]} />
      <NavBarIcon navigation={navigation} currentScreen={currentScreen} name={navIcons[4][0]} iconName={navIcons[4][1]} />
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
  },
  icon: {
    marginBottom: 3,
  },
});
