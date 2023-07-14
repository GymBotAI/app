import { useState, useEffect, useRef } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Animated,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import * as Font from "expo-font";

import Name from "./Name";
import Age from "./Age";
import Gender from "./Gender";
import HeightWeight from "./HeightWeight"
import Goals from "./Goals";

let inputOption = null;

export default function Question({ navigation }) {
  const [isInputFilled, setInputFilled] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);
  const slideUpAnim = useRef(new Animated.Value(300)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [prompt, setPrompt] = useState(
    "Welcome to GymBot! To get started, tell us your name"
  );

  const handleSignUp = () => {
    setInputFilled(false);
    if (prompt === "Welcome to GymBot! To get started, tell us your name") {
      setPrompt("When were you born?");
      inputOption = <Age onAgeChange={setInputFilled} />;
    } else if (prompt === "When were you born?") {
      setPrompt("What is your gender?");
      inputOption = <Gender onGenderChange={setInputFilled} />;
    } else if (prompt === "What is your gender?") {
      setPrompt("What are your weight and height?")
      inputOption = <HeightWeight onChange={setInputFilled} />;
    } else if (prompt === "What are your weight and height?") {
      setPrompt("What are your goals?");
      inputOption = <Goals onGoalChange={setInputFilled} />;
    } else {
      navigation.navigate("Chat");
    }
    
  };

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "roboto-black": require("../../../assets/fonts/Roboto-Black.ttf"),
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
  }

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={{
        flexGrow: 1,
        overflow: "auto",
        height: "95%",
      }}
    >
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
    fontFamily: "roboto-black",
    paddingVertical: 10,
    color: "#dbdbdb",
  },
  button: {
    alignSelf: "center",
    width: "100%",
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
    textAlign: "center",
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 8,
    marginHorizontal: -5,
  },
  disabledButton: {
    backgroundColor: "#fff", // Change the background color of the disabled button
  },
});
