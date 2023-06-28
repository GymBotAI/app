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

import Question from "../components/Question";

export default function SignUp({ navigation }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [fitnessGoal, setFitnessGoal] = useState("");

  const slideUpAnim = useRef(new Animated.Value(300)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [prompt, setPrompt] = useState("What is your name?")
  const [input, setInput] = useState ("Enter your name")

  useEffect(() => {
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


  const handleSignUp = () => {
    if (prompt === "What is your name?") {
      setPrompt("When were you born?");
    } else if (prompt === "When were you born?") {
      setPrompt("What are your fitness goals?")
    } else if (prompt === "What are your fitness goals?") {
      setPrompt("What is your gender?")
    } else {
      navigation.navigate("Chat");
    }
  };

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: slideUpAnim }], opacity: fadeAnim },
      ]}
    >
      <Question
        prompt={prompt}
        input={input}
        handleSignUp={handleSignUp}
      />

      <StatusBar barStyle="dark-content" />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    marginTop: 200,
  },
});
