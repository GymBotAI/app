import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Animated,
} from "react-native";

import * as Font from "expo-font";

export default function Question({ prompt, input, handleSignUp }) {
    const [name, setName] = useState("");

    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "custom-font": require("../../assets/fonts/Roboto-Black.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <Text style={styles.label}>{prompt}</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder={input}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.text}>Continue</Text>
      </TouchableOpacity>

      <StatusBar barStyle="dark-content" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    marginTop: 200,
  },
  text: {
    alignSelf: "center",
    fontSize: 24,
    fontFamily: "custom-font",
    paddingVertical: 10,
    color: "#dbdbdb",
  },
  button: {
    width: "95%",
    backgroundColor: "#1260de",
    borderRadius: 8,
    marginHorizontal: 30,
    marginTop: 250,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    width: "95%",
    height: 40,
    borderColor: "black",
    marginTop: 20,
    fontSize: 16,
    borderBottomWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
});
