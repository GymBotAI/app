import { View, KeyboardAvoidingView } from "react-native";
import { useState, useEffect } from "react";
import * as Device from "expo-device";

import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import Prompts from "./Prompts";

import { askGymBotAI } from "../api";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [showPrompts, setShowPrompts] = useState(true); // New state for showing/hiding Prompts
  let selectedPrompt = "";

  const handlePromptSelection = (text) => {
    selectedPrompt = text;
    console.log(selectedPrompt);
  };

  const handlePromptPress = () => {
    setShowPrompts(false); //Sets show prompts to false
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
        {showPrompts && <Prompts onPromptSelection={handlePromptSelection} />}

        <ChatMessages messages={messages} />
        <ChatInput
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "white",
            paddingTop: 10,
            paddingBottom: 20,
            paddingRight: 10,
            paddingLeft: 10,
          }}
          onSubmit={(text) => {
            askGymBotAI("user", text, messages, setMessages);
          }}
          onDeletePrompts={handlePromptPress} // Pass the callback function to ChatInput
          suggestedPrompt={selectedPrompt}
          multiline
        />
      </View>
    </KeyboardAvoidingView>
  );
}
