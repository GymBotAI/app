import { View, KeyboardAvoidingView } from "react-native";
import { useState, useRef, useEffect } from "react";
import * as Device from "expo-device";

import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import Prompts from "./Prompts";

import { useGymBotAI } from "../api";

export default function Chat() {
  const chatInputRef = useRef({});
  const [showPrompts, setShowPrompts] = useState(true); // New state for showing/hiding Prompts
  const [messages, sendMessage, setMessages] = useGymBotAI([
    {
      role: "assistant",
      content: "How can I help you today?",
    },
  ]);

  const initialMessage = "Hello! I'm GymBot, your personal trainer. How can I help you today?";
  const [initialMessagePos, setInitialMessagePos] = useState(0);
  const [hasDoneInitialMessage, setHasDoneInitialMessage] = useState(false);

  const initialMessageTypeSpeed = 100;
  const initialMessageTypeChars = 2;

  // if (initialMessagePos >= initialMessage.length) {
  //   setHasDoneInitialMessage(() => true);
  // } else if (!hasDoneInitialMessage) {
  //   useEffect(() => {
  //     const timeout = setTimeout(() => {
  //       setInitialMessagePos((oldPos) => oldPos + initialMessageTypeChars);
  //       setMessages((oldMessages) => {
  //         return [{
  //           ...oldMessages[0],
  //           content: oldMessages[0].content + initialMessage.substr(initialMessagePos, initialMessageTypeChars)
  //         }];
  //       });
  //     }, initialMessageTypeSpeed);

  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }, [
  //     setInitialMessagePos,
  //     setMessages,
  //     messages
  //   ]);
  // }

  // useEffect(() => {
  //   return closeWs;
  // }, []);

  const handlePromptPress = () => {
    setShowPrompts(false); //Sets show prompts to false
  };

  return (
    <KeyboardAvoidingView
      behavior={Device.osName == "Android" ? "height" : "padding"}
      style={{
        flex: 1,
        width: "100%",
        backgroundColor: '#F5F5F5',
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <ChatMessages messages={messages} handlePromptPress={handlePromptPress} sendMessage={sendMessage} showPrompts={showPrompts}/>        
        
        <ChatInput
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "white",
          }}
          onSubmit={(text) => {
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
