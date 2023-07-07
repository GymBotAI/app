import { Keyboard, View, ScrollView } from "react-native";
import { useRef, useLayoutEffect } from "react";

import ChatMessage from "./ChatMessage";
import Prompts from "./Prompts";

export default function ChatMessages({ messages, handlePromptPress, sendMessage, showPrompts }) {
  const scrollViewRef = useRef();

  useLayoutEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({ animated: false });
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      style={{
        flexGrow: 1,
        overflow: "auto",
        height: "100%",
      }}
    >
      <View
        key="1"
        style={{
          padding: 25,
          paddingBottom: 25,
          flex: 1,
          gap: 20,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages?.length
          ? messages.map((message, i) => (
              <ChatMessage key={i} message={message} />
            ))
          : null}
      </View>

      {showPrompts && (
        <Prompts
          onPromptSelection={(text) => {
            sendMessage(text);
            handlePromptPress();
          }}
          prompts={["Give me a chest workout!", "How do I run faster?"]}
        />
      )}
    </ScrollView>
  );
}
