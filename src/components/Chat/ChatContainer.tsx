import { View, KeyboardAvoidingView } from "react-native";
import { useState, useRef } from "react";
import * as Device from "expo-device";

import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

import { useGymBotAI } from "../../api";

export default function Chat() {
  const chatInputRef = useRef({});
  const [showPrompts, setShowPrompts] = useState(true); // New state for showing/hiding Prompts
  const { messages, sendMessage } = useGymBotAI([
    {
      role: "assistant",
      content: "How can I help you today?",
    },
  ]);

  const handlePromptPress = () => {
    setShowPrompts(false); //Sets show prompts to false
  };

  return (
    <KeyboardAvoidingView
      behavior={Device.osName == "Android" ? "height" : "padding"}
      style={{
        flex: 1,
        width: "100%",
        backgroundColor: "#F5F5F5",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <ChatMessages
          messages={messages}
          handlePromptPress={handlePromptPress}
          sendMessage={sendMessage}
          showPrompts={showPrompts}
        />

        <ChatInput
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "white",
          }}
          onSubmit={(text: string) => {
            sendMessage(text);
          }}
          // onInput={}
          setValueRef={chatInputRef}
          onDeletePrompts={handlePromptPress} // Pass the callback function to ChatInput
          multiline
        />
      </View>
    </KeyboardAvoidingView>
  );
}
