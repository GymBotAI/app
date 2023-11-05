import { useRef, useState, useEffect, useLayoutEffect } from "react";
import { Keyboard, View, ScrollView } from "react-native";

import { colors } from "../../../components/styles";

import * as Device from "expo-device";

import ChatMessage from "./ChatMessage";
import Prompts from "./ChatPrompts";

import { Goals } from "../../StartUp/EnterInfo/GoalSelect";

export default function ChatMessages({
  messages,
  handlePromptPress,
  sendMessage,
  showPrompts,
  goToWorkoutScreen,
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
    for (let i = 0; i < Goals.length; i++) {
      if (Goals[i][0] != "H") {
        Goals[i] = Goals[i].toLowerCase();
        if (Goals[i] === "better abs") {
          Goals[i] = "How do I get " + Goals[i] + "?";
        } else if (Goals[i] === "do a pull up") {
          Goals[i] = "How can I " + Goals[i] + "?";
        } else if (Goals[i] === "other") {
          Goals[i] = "";
        } else {
          Goals[i] = "How do I " + Goals[i] + "?";
        }
      }
    }

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
    // if (maxScrollPosition + 125 <= scrollPositionRef.current) {
    scrollViewRef.current?.scrollToEnd({ animated: false });
    // }
  }, [messages]);

  return (
    <ScrollView
      ref={scrollViewRef}
      style={{
        flexGrow: 1,
        backgroundColor: colors.white.default,
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
              <ChatMessage
                key={i}
                message={message}
                goToWorkoutScreen={goToWorkoutScreen}
              />
            ))
          : null}
      </View>

      {showPrompts && (
        <Prompts
          onPromptSelection={(text) => {
            sendMessage(text);
            handlePromptPress();
          }}
          prompts={Goals}
        />
      )}
    </ScrollView>
  );
}
