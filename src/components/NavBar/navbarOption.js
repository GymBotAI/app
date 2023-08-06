import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons'; 


export default function NavBarIcon({ navigation, currentScreen, name, iconName }) {

  return (
    
        <TouchableOpacity key={name}
          style={styles.button}
          onPress={() => {
            navigation.navigate(name);
          }}
        >
          <FontAwesome5 name={iconName}size={27}
            color={currentScreen === name ? "#1678e0" : "#333"}
            style={styles.icon}
          />
          <Text style={[styles.buttonText, { color: currentScreen === name ? "#1678e0" : "#333" }]}>
            {name}
          </Text>

        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
