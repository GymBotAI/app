import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Animated,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import * as Font from "expo-font";
import * as Device from "expo-device";


import Name from "./signup/Name";
import Age from "./signup/Age";
import Gender from "./signup/Gender";
import Goals from "./signup/Goals";

let inputOption = (null)

export default function Question({ prompt, handleSignUp }) {
  const [isInputFilled, setInputFilled] = useState(false);
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

    return () => {
      // Reset the animation values when the component unmounts
      slideUpAnim.setValue(300);
      fadeAnim.setValue(0);
    };
  }, [prompt]);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  if (prompt === "Welcome to GymBot! To get started, tell us your name") {
    inputOption = <Name onNameChange={setInputFilled} />;
  } else if (prompt === "When were you born?") {
    inputOption = <Age/>
  } else if (prompt === "What is your gender?") {
    inputOption = <Gender/>
  } else if (prompt === "What are your goals?") {
    inputOption = <Goals/>
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}
    style={{
        flexGrow: 1,
        overflow: "auto",
        height: "95%",
      }}>
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateX: slideUpAnim }], opacity: fadeAnim },
      ]}
    >
      <Text style={styles.label}>{prompt}</Text>
      {inputOption}

      <TouchableOpacity
        style={[styles.button, !isInputFilled && styles.disabledButton]}
        onPress={handleSignUp}
        disabled={!isInputFilled}
      >
        <Text style={styles.text}>Continue</Text>
      </TouchableOpacity>

      <StatusBar barStyle="dark-content" />
    </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: "flex",
    flex: 1,
  },
  text: {
    alignSelf: "center",
    fontSize: 24,
    fontFamily: "custom-font",
    paddingVertical: 10,
    color: "#dbdbdb",
  },
  button: {
    alignSelf: 'center',
    // position: "absolute",
    // top: 200,
    width: '100%',
    backgroundColor: "#1260de",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    marginTop: 50,
    textAlign: 'center',
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 8,
    marginHorizontal: -5,
    
  }, disabledButton: {
    backgroundColor: "#fff", // Change the background color of the disabled button
  } 
});

