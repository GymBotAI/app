import { useRef } from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";

import ChatContainer, {
  ChatContainerRef,
} from "../../components/Chat/ChatContainer";
import ChatHeader from "../../components/Chat/ChatHeader";
import GymBotNavigation from "../../components/NavBar";

import { FontAwesome5 } from "@expo/vector-icons";

import { baseServerAddr } from "../../api/address";

export default function ChatScreen({ navigation }) {
  const chatContainerRef: ChatContainerRef = useRef(null);

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
                `Server address:\n${baseServerAddr}\n\nWS ready state:\n${chatContainerRef.current?.readyState}\n\nHas authed:\n${chatContainerRef.current?.hasAuthed}`
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
      <ChatContainer
        containerRef={chatContainerRef}
        goToWorkoutScreen={() => {
          navigation.navigate("DesignWorkout");
        }}
      />
      <StatusBar barStyle="light-content" />

      <GymBotNavigation navigation={navigation} currentScreen={"Chat"} />
    </View>
  );
}
