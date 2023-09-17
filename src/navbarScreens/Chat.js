import { useRef } from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";

import ChatContainer from "../components/Chat/ChatContainer";
import ChatHeader from "../components/Chat/ChatHeader";
import GymBotNavigation from "../components/navbar";

import { FontAwesome5 } from "@expo/vector-icons";

import { serverAddr } from "../api";

export default function HomeScreen({ navigation }) {
  const chatContainerRef = useRef(null);

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
              alert(
                `Server address:\n${serverAddr}\n\nWS ready state:\n${chatContainerRef.current?.readyState}`
              );
            }}
          >
            <FontAwesome5 name="terminal" size={24} color="#333" />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity
          onPress={() => {
            chatContainerRef.current?.clear();
          }}
        >
          <FontAwesome5 name="trash" size={24} color="#333" />
        </TouchableOpacity>
      </ChatHeader>
      <ChatContainer containerRef={chatContainerRef} />
      <StatusBar barStyle="light-content" />

      <GymBotNavigation navigation={navigation} currentScreen={"Chat"} />
    </View>
  );
}
