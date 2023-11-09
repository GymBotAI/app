import { useRef, useContext } from "react";
import { Alert, View, StatusBar, TouchableOpacity } from "react-native";

import { AppContext } from "$context";
import { baseServerAddr } from "$api/address";

import { colors } from "$styles";

import ChatContainer from "./components/ChatContainer";
import ChatHeader from "./components/ChatHeader";

import { FontAwesome5 } from "@expo/vector-icons";

import type { ChatContainerRef } from "./components/ChatContainer";
import type { NavigationProp } from "$types/navigation";

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
          navigation.navigate("DesignWorkout");
        }}
      />
      <StatusBar barStyle="light-content" />
    </View>
  );
}
