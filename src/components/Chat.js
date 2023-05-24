import { View, KeyboardAvoidingView } from "react-native";
import { useState, useRef } from "react";
import * as Device from "expo-device";

import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import Prompts from "./Prompts";

import { askGymBotAI } from "../api";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const chatInputRef = useRef({});
  const [showPrompts, setShowPrompts] = useState(true); // New state for showing/hiding Prompts

  const handlePromptPress = () => {
    setShowPrompts(false) //Sets show prompts to false
  }
  

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
        {showPrompts && <Prompts
              onPromptSelection={(prompt) => {
                chatInputRef.current?.setText?.(prompt);
              }}
              prompts={[
                "Give me a chest a workout!",
                "How can I strengthen my knee to prevent injury?",
                "What are the health benefits of cardio?",
              ]}
            />
          }

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
          setValueRef={chatInputRef}
          onDeletePrompts={handlePromptPress} // Pass the callback function to ChatInput
          multiline
        />
      </View>
    </KeyboardAvoidingView>
  );
}
