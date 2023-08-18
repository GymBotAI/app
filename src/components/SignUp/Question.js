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

import username from "./Credentials";
import password from "./Credentials";
import Name from "./Name";
import Age from "./Age";
import Gender from "./Gender";
import HeightWeightContainer from "./HeightWeightContainer";
import Goals from "./Goals";

let inputOption = null;

export default function Question({ navigation }) {
  const [nameVal, setNameVal] = useState("")

  const [isInputFilled, setInputFilled] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);
  const slideUpAnim = useRef(new Animated.Value(300)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [prompt, setPrompt] = useState(
    "Tell us your name!"
  );

  const submitData = () => {
    console.log(nameVal)
    fetch("http://openhost.ddns.net:3000/send",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        "USERNAME": String(nameVal),
        "PASSWORD": String(nameVal),
        "EMAIL": String(nameVal)
      }) //nice
    })
    .then(res=>res.json())
    .then(data=>{ 
      console.log(data)
    })
  }

//it didnt log anything at all

//when u submit ur height and weight

//the blank logs came before

  const handleSignUp = () => {
    setInputFilled(false);
    if (prompt === "") {
      setPrompt("Tell us your name!");
      inputOption = <Name onNameChange={setInputFilled} />;
    } else if (prompt === "Tell us your name!") {
      setPrompt("When were you born?");
      inputOption = <Age onAgeChange={setInputFilled} />;
    } else if (prompt === "When were you born?") {
      setPrompt("What is your gender?");
      inputOption = <Gender onGenderChange={setInputFilled} />;
    } else if (prompt === "What is your gender?") {
      setPrompt("What are your weight and height?");
      inputOption = <HeightWeightContainer onChange={setInputFilled} />;
    } else if (prompt === "What are your weight and height?") {
      setPrompt("What are your goals?");
      inputOption = <Goals onGoalChange={setInputFilled} />;
    } else {
      navigation.navigate("Home");
      // submitData();
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

  if (prompt === "Tell us your name!") {
    // inputOption = <HeightWeightContainer onChange={setInputFilled} />;
    inputOption = <Name onNameChange={setInputFilled} name={nameVal} setName={setNameVal}    />;
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
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  label: {
    marginTop: 20,
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
