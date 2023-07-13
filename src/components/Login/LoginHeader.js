import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function LoginHeader({}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>GymBot</Text>
      <View style={styles.logoContainer}>
        <View style={styles.logoBorder}>
          <Image
            source={require("../../../assets/icon.jpg")}
            style={styles.logo}
            resizeMode="contain"
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
    borderWidth: 2,
    borderRadius: 30, // Half the width and height of the logo image
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  headerText: {
    fontSize: 47.0838,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 2,
  },
});