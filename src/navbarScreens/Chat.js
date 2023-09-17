import { View, StatusBar, TouchableOpacity } from "react-native";

import ChatContainer from "../components/Chat/ChatContainer";
import ChatHeader from "../components/Chat/ChatHeader";
import GymBotNavigation from "../components/navbar";

import { FontAwesome5 } from "@expo/vector-icons";

import { serverAddr } from "../api";

export default function HomeScreen({ navigation }) {
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
              alert("Server address: " + serverAddr);
            }}
          >
            <FontAwesome5 name="terminal" size={24} color="#333" />
          </TouchableOpacity>
        ) : null}
        <TouchableOpacity>
          <FontAwesome5 name="trash" size={24} color="#333" />
        </TouchableOpacity>
      </ChatHeader>
      <ChatContainer />
      <StatusBar barStyle="light-content" />

      <GymBotNavigation navigation={navigation} currentScreen={"Chat"} />
    </View>
  );
}
