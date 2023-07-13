import { Keyboard, Text, View, ScrollView } from "react-native";
import { useRef, useState, useEffect, useLayoutEffect } from "react";

import * as Device from "expo-device";

import ChatMessage from "./ChatMessage";
import Prompts from "../Prompts";

export default function ChatMessages({
  messages,
  handlePromptPress,
  sendMessage,
  showPrompts,
}) {
  const scrollViewRef = useRef();
  const scrollPositionRef = useRef(0);
  const [maxScrollPosition, setMaxScrollPosition] = useState(0);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);

  const handleScrollViewLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setScrollViewHeight(height);
  };

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent;
    const currentPosition = contentOffset.y;
    scrollPositionRef.current = currentPosition;
  };

  const handleContentSizeChange = (contentWidth, contentHeight) => {
    const scrollViewHeight = 700;
    const maxPosition = contentHeight - scrollViewHeight;
    setMaxScrollPosition(maxPosition);
  };

  useEffect(() => {
    const showListener = Keyboard.addListener(
      Device.osName == "Android" ? "keyboardDidShow" : "keyboardWillShow",
      () => {
        const scrollHeight = scrollPositionRef.current + 264;
        scrollViewRef.current?.scrollTo({ y: scrollHeight, animated: true });
      }
    );

    const hideListener = Keyboard.addListener(
      Device.osName == "Android" ? "keyboardDidHide" : "keyboardWillHide",
      () => {
        const scrollHeight = scrollPositionRef.current - 264;
        scrollViewRef.current?.scrollTo({ y: scrollHeight, animated: true });
      }
    );

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, [messages]);

  useLayoutEffect(() => {
    if (maxScrollPosition + 125 <= scrollPositionRef.current) {
      scrollViewRef.current?.scrollToEnd({ animated: false });
    }
  }, [messages]);

  return (
    <ScrollView
      ref={scrollViewRef}
      style={{
        flexGrow: 1,
        backgroundColor: "white",
      }}
      onScroll={handleScroll}
      onContentSizeChange={handleContentSizeChange}
      onLayout={handleScrollViewLayout}
      scrollEventThrottle={16}
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
