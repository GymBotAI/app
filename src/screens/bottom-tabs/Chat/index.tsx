import type { NavigationProp } from "$types/navigation";
import type { ChatContainerRef } from "./components/ChatContainer";

import { useContext, useRef } from "react";
import { Alert, StatusBar, TouchableOpacity, View } from "react-native";

import { baseServerAddr } from "$api/address";
import { AppContext } from "$context";

import { colors } from "$styles";

import ChatContainer from "./components/ChatContainer";
import ChatHeader from "./components/ChatHeader";

import { FontAwesome5 } from "@expo/vector-icons";

export default function ChatScreen({
  navigation,
}: {
  navigation: NavigationProp;
}) {
  const chatContainerRef: ChatContainerRef = useRef(null);

  const { session } = useContext(AppContext);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <ChatHeader text="Chat">
        {__DEV__ ? (
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                "Debug info",
                `Server address:\n${baseServerAddr}\n\n` +
                  `WS ready state:\n${chatContainerRef.current?.readyState}\n\n` +
                  `Has authed:\n${chatContainerRef.current?.hasAuthed}\n\n` +
                  `User ID:\n${session?.user.id}`
              );
            }}
          >
            <FontAwesome5
              name="terminal"
              size={24}
              color={colors.black.lighter}
            />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          onPress={() => {
            chatContainerRef.current?.clear();
          }}
        >
          <FontAwesome5 name="trash" size={24} color={colors.black.lighter} />
        </TouchableOpacity>
      </ChatHeader>
      <ChatContainer
        containerRef={chatContainerRef}
        goToWorkoutScreen={() => {
          navigation.navigate("Workouts");
        }}
      />
      <StatusBar barStyle="light-content" />
    </View>
  );
}
