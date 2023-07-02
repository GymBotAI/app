import React, { useState} from "react";
import { View, StyleSheet, StatusBar} from "react-native";


import Question from "../components/Question";
import SignUpHeader from "../components/signup/SignUpHeader"


let inputOptions = null;

export default function SignUp({ navigation }) {
  const [name, setName] = useState("")
  const [birthdate, setBirthdate] = useState(new Date()); // Set initial value to the current date

  const [prompt, setPrompt] = useState("Welcome to GymBot! To get started, tell us your name");
  const [highlight, setHighlight] = useState("");

  
  
  const handleHighlight = (text) => {
    setHighlight(text)
  }

  const handleSignUp = () => {
    if (prompt === "Welcome to GymBot! To get started, tell us your name") {
      setPrompt("When were you born?");

    } else if (prompt === "When were you born?") {
      setPrompt("What is your gender?");

    } else if (prompt === "What is your gender?") {
      setPrompt("What are your goals?");
    } else {
      navigation.navigate("Chat");
    }
  };

  return (
    <View style={styles.container}>
    
      <View style={{
        position: 'absolute',
        top: -200,
        width: '110%',
      }}>
      <SignUpHeader text="GymBot" minitext="Welcome to"/>
      </View>

      <Question prompt={prompt} input={inputOptions} handleSignUp={handleSignUp} />

      <StatusBar barStyle="dark-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    marginTop: 200,
  },
  boxContainer: {
    flex: 1,
    display: 'flex',
    alignItems: "center",
    marginBottom: 20,
  },
});
