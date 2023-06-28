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
    // Perform sign-up logic using the collected user data

    // Navigate to the next screen
    navigation.navigate("Chat");
  };

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: slideUpAnim }], opacity: fadeAnim },
      ]}
    >
      <Question
        prompt="What is your name?"
        input="Enter your name"
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
