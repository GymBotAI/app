import { Keyboard, View, ScrollView } from "react-native";
import { useRef, useEffect } from "react";
import * as Device from "expo-device";

import ChatMessage from "./ChatMessage";

export default function ChatMessages({ messages }) {
  const scrollRef = useRef();

  useEffect(() => {
    const listener = Keyboard.addListener(
      Device.osName == "Android" ? "keyboardDidShow" : "keyboardWillShow",
      () => {
        scrollRef.current?.scrollToEnd({ animated: true });
      }
    );

    return listener.remove;
  }, []);

  return (
    <ScrollView
      ref={scrollRef}
      onContentSizeChange={() => {
        scrollRef.current.scrollToEnd({ animated: true });
      }}
      style={{
        flexGrow: 1,
        overflow: "auto",
        height: "100%",
      }}
    >
      <View
        style={{
          padding: 20,
          paddingBottom: 15,
          flex: 1,
          gap: 20,
          height: "100%",
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {messages?.length
          ? messages.map((message, i) => ChatMessage({ message, key: i }))
          : null}
      </View>
    </ScrollView>
  );
}
