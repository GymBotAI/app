import React, { useState, useEffect, useRef } from "react";
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet, StatusBar, Animated, FlatList } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

import * as Font from "expo-font";

import Question from "../components/Question";
import GenderSelect from "../components/Gender";

let inputOptions = null;

export default function SignUp({ navigation }) {
  const [name, setName] = useState("")
  const [birthdate, setBirthdate] = useState(new Date()); // Set initial value to the current date

  const slideUpAnim = useRef(new Animated.Value(300)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const [prompt, setPrompt] = useState("What is your name?");
  const [highlight, setHighlight] = useState("");

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
  
  const handleHighlight = (text) => {
    setHighlight(text)
  }

  const handleSignUp = () => {
    if (prompt === "What is your name?") {
      setPrompt("When were you born?");

      inputOptions = (
        <DateTimePicker
          value={birthdate}
          mode="date"
          display="spinner"
          onChange={(event, selectedDate) => {
            if (selectedDate) {
              setBirthdate(selectedDate);
            }
          }}
        />
      );

    } else if (prompt === "When were you born?") {
      setPrompt("What is your gender?");

    } else if (prompt === "What is your gender?") {
      setPrompt("What are your fitness goals?");
    } else {
      navigation.navigate("Chat");
    }
  };

  if (prompt === "What is your name?") {
    inputOptions = (
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
    );
    }
  
  if (prompt === "What is your gender?") {
    inputOptions = (
      <View style={styles.boxContainer}>

        <View style={{display: 'flex', flexDirection: 'row'}}>
        <GenderSelect
          image={require("../../assets/man.png")}
          text="Male"
          handleHighlight={handleHighlight}
          selected={highlight}
        />
        <GenderSelect
          image={require("../../assets/woman.png")}
          text="Female"
          handleHighlight={handleHighlight}
          selected={highlight}
        />
        </View>
        
        <View style={{display: 'flex', flexDirection: 'row'}}>
        <GenderSelect
          image={require("../../assets/user.png")}
          text="Other"
          handleHighlight={handleHighlight}
          selected={highlight}
        />
        <GenderSelect
          image={require("../../assets/user.png")}
          text="Prefer Not to Say"
          handleHighlight={handleHighlight}
          selected={highlight}
        />
        </View>

      </View>
    );
    }

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: slideUpAnim }], opacity: fadeAnim },
      ]}
    >
      <Question prompt={prompt} input={inputOptions} handleSignUp={handleSignUp} />

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
  boxContainer: {
    flex: 1,
    display: 'flex',
    alignItems: "center",
    marginBottom: 20,
  },
});
