import { useState, useRef, useCallback, useContext } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import type { MutableRefObject } from "react";

import { AppContext } from "../../../context";

import * as Device from "expo-device";

import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

import { colors } from "../../../components/styles";

import { useGymBotAI } from "../../../api/chat";
import type { ReadyState } from "react-use-websocket";

import type { SetValueRef } from "./ChatInput";

export type ChatContainerRef = MutableRefObject<null | {
  clear: () => void;
  readyState: ReadyState;
  hasAuthed: boolean;
}>;

export default function Chat({
  containerRef,
  goToWorkoutScreen,
}: {
  containerRef?: ChatContainerRef;
  goToWorkoutScreen: () => void;
}) {
  const { session } = useContext(AppContext);

  const chatInputRef: SetValueRef = useRef();
  const [showPrompts, setShowPrompts] = useState(true); // New state for showing/hiding Prompts
  const { messages, sendMessage, setMessages, readyState, hasAuthed } =
    useGymBotAI([
      {
        role: "assistant",
        content: "How can I help you today?",
      },
    ]);

  const handlePromptPress = useCallback(() => {
    setShowPrompts(false); //Sets show prompts to false
  }, [setShowPrompts]);

  const onSubmit = useCallback(
    (text: string) => {
      sendMessage(text);
    },
    [sendMessage]
  );

  if (containerRef) {
    containerRef.current = {
      clear: () => {
        setMessages([messages[0]]);
      },
      readyState,
      hasAuthed,
    };
  }

  return (
    <KeyboardAvoidingView
      behavior={Device.osName == "Android" ? "height" : "padding"}
      style={{
        flex: 1,
        width: "100%",
        backgroundColor: colors.white.default,
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
          goToWorkoutScreen={goToWorkoutScreen}
        />

        <ChatInput
          disabled={!hasAuthed || !session.user}
          onSubmit={onSubmit}
          // onInput={}
          setValueRef={chatInputRef}
          onDeletePrompts={handlePromptPress} // Pass the callback function to ChatInput
        />
      </View>
    </KeyboardAvoidingView>
  );
}