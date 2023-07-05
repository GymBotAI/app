import { View, KeyboardAvoidingView, StatusBar } from "react-native";
import { useState, useRef, useEffect } from "react";
import * as Device from "expo-device";

import ChatMessages from "../ChatMessages";
import ChatInput from "../ChatInput";
import Prompts from "../Prompts";

import Question from "../Question";

import { useGymBotAI } from "../../api";

export default function SignUpContainer() {
  const chatInputRef = useRef({});

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
    <KeyboardAvoidingView
      behavior={Device.osName == "Android" ? "height" : "padding"}
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >

        <Question prompt={prompt} handleSignUp={handleSignUp} />
        
      </View>

    </KeyboardAvoidingView>
  );
}
