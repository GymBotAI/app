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
    const slideUpAnim = useRef(new Animated.Value(300)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "custom-font": require("../../assets/fonts/Roboto-Black.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  
    Animated.parallel([
      Animated.timing(slideUpAnim, {
        toValue: 0,
        duration: 750,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
      }),
    ]).start();
  }, [slideUpAnim, fadeAnim]);

  
  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: slideUpAnim }], opacity: fadeAnim },
      ]}
    >
      <Text style={styles.label}>{prompt}</Text>
      {input}

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.text}>Continue</Text>
      </TouchableOpacity>

      <StatusBar barStyle="dark-content" />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    alignSelf: "center",
    fontSize: 24,
    fontFamily: "custom-font",
    paddingVertical: 10,
    color: "#dbdbdb",
  },
  button: {
    position: 'absolute',
    top: 200,
    width: "100%",
    backgroundColor: "#1260de",
    borderRadius: 8,
    marginTop: 250,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    alignSelf: 'left',
    marginLeft: 10,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
