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

import { ageVal } from './Age.js';
import { genderVal } from './Gender.js';
import { dateValue } from './Age.js';
import { weightVal, wUnit } from './HeightWeightContainer.js';
import { heightVal, hUnit } from './HeightWeightContainer.js';
//import { ageVal } from './Age.js';

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
  const [dateVal, setDateVal] = useState("")
  const [fixedHeight, setFixedHeight] = useState(0);
  const [fixedWeight, setFixedWeight] = useState(0);
  const [ageVal, setAgeVal] = useState(0);

  const [isInputFilled, setInputFilled] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);
  const slideUpAnim = useRef(new Animated.Value(300)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [prompt, setPrompt] = useState(
    "Tell us your name!"
  );

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(ageInYears);
  };

  const submitData = () => {
    let calculatedFixedHeight = heightVal;
    let calculatedFixedWeight = weightVal;
    let ageVal = calculateAge(dateValue);

    if (hUnit === "in") {
      calculatedFixedHeight = heightVal * 2.54;
    }

    if (wUnit === "lb") {
      calculatedFixedWeight = weightVal / 2.20462;
    }

    calculatedFixedHeight = Math.ceil(calculatedFixedHeight);
    calculatedFixedWeight = Math.ceil(calculatedFixedWeight);

    setFixedHeight(calculatedFixedHeight); // Update the state with the calculated value
    setFixedWeight(calculatedFixedWeight); // Update the state with the calculated value

    console.log(username)
    console.log(password)
    console.log(nameVal)
    console.log(genderVal)
    console.log(ageVal)
    console.log(calculatedFixedWeight)
    console.log(calculatedFixedHeight)
    fetch("http:openhost.ddns.net:3000/send",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        "NAME": String(nameVal),
        "USERNAME": String(username),
        "PASSWORD": String(password),
        "AGE": ageVal,
        "WEIGHT": calculatedFixedWeight,
        "HEIGHT": calculatedFixedHeight
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
      submitData();
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
  } else if (prompt === "When were you born?") {
    //inputOption = <Age onAgeChange={setInputFilled} age={ageVal} setAge={setAgeVal}    />;
  } else if (prompt === "What is your gender?") {
    //inputOption = <Name onNameChange={setInputFilled} name={nameVal} setName={setNameVal}    />;
  } else if (prompt === "What are your weight and height?") {
    //inputOption = <Name onNameChange={setInputFilled} name={nameVal} setName={setNameVal}    />;
  } else if (prompt === "What are your goals?") {
    //inputOption = <Name onNameChange={setInputFilled} name={nameVal} setName={setNameVal}    />;
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
