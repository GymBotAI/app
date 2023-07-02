import React, { useState} from "react";
import { View, StyleSheet, StatusBar} from "react-native";


import Question from "../components/Question";
import SignUpHeader from "../components/signup/SignUpHeader"


export default function SignUp({ navigation }) {

  const [prompt, setPrompt] = useState("Welcome to GymBot! To get started, tell us your name");

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

      <Question prompt={prompt} handleSignUp={handleSignUp} />

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
});
