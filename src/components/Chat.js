import { View, KeyboardAvoidingView } from "react-native";
import { useState, useRef, useEffect } from "react";
import * as Device from "expo-device";

import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import Prompts from "./Prompts";

import { useGymBotAI } from "../api";

export default function Chat() {
  const [text, setText] = useState("");
  const chatInputRef = useRef({});
  const [showPrompts, setShowPrompts] = useState(true); // New state for showing/hiding Prompts
  const [messages, sendMessage, closeWs] = useGymBotAI([]);

  useEffect(() => {
    return closeWs;
  }, []);

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
        {showPrompts && (
          <Prompts
            onPromptSelection={(prompt) => {
              chatInputRef.current?.setText?.(prompt);
            }}
            prompts={[
              "Give me a chest workout!",
              "How can I strengthen my knee to prevent injury?",
              "What are the health benefits of cardio?",
            ]}
          />
        )}

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
            sendMessage(text);
          }}
          setValueRef={chatInputRef}
          onDeletePrompts={handlePromptPress} // Pass the callback function to ChatInput
          multiline
        />
      </View>
    </KeyboardAvoidingView>
  );
}
