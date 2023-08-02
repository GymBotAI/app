import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function LoginHeader({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>GymBot</Text>
      <View style={styles.logoContainer}>
        <View style={styles.logoBorder}>
          <Image
            source={require("../../../assets/GymBotLogo.jpg")}
            style={styles.logo}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 50,
  },
  logoContainer: {
    marginLeft: 10,
  },
  logoBorder: {
    borderColor: "white",
    // borderWidth: 2,
    // borderRadius: 30, // Half the width and height of the logo image
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    width: 58,
    height: 58,
    borderRadius: 50,
  },
  headerText: {
    fontSize: 47.0838,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 2,
  },
});
