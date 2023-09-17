import { View, KeyboardAvoidingView } from "react-native";
import { useState, useRef, forwardRef } from "react";
import * as Device from "expo-device";

import type { MutableRefObject } from "react";

import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

import { useGymBotAI } from "../../api";

export type ChatContainerRef = MutableRefObject<null | {
  clear: () => void;
}>;

export default function Chat({ containerRef }: {
  containerRef?: ChatContainerRef
}) {
  const chatInputRef = useRef({});
  const [showPrompts, setShowPrompts] = useState(true); // New state for showing/hiding Prompts
  const { messages, sendMessage, setMessages } = useGymBotAI([
    {
      role: "assistant",
      content: "How can I help you today?",
    },
  ]);

  const handlePromptPress = () => {
    setShowPrompts(false); //Sets show prompts to false
  };

  if (containerRef && !containerRef.current) {
    containerRef.current = {
      clear: () => {
        setMessages([messages[0]]);
      },
    };
  }

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
