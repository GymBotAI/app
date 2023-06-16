import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function LoginHeader({  }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>GymBot</Text>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/icon.jpg")} style={styles.logo} resizeMode="contain" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row", // Align children horizontally
    justifyContent: "center", // Center children horizontally
    marginBottom: 20,
    marginTop: 50,
  },
  logoContainer: {
    marginLeft: 10, // Adjust the spacing between text and logo
  },
  logo: {
    width: 50, // Adjust the size as needed
    height: 50, // Adjust the size as needed
    borderRadius: 55,
  },
  headerText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 2,
  },
});
