import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function LoginHeader() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/GymBotText.png")}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 120,
  },
  logo: {
    width: 250,
    height: 58,
  },
  headerText: {
    fontSize: 47.0838,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 2,
  },
});
