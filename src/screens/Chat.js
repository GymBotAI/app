import { View, StatusBar } from "react-native";

import ChatContainer from "../components/Chat/ChatContainer";
import ChatHeader from "../components/Chat/ChatHeader";
import GymBotNavigation from "../components/navbar";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <ChatHeader text="Chat" />
      <ChatContainer />
      <StatusBar barStyle="light-content" />

      <GymBotNavigation navigation={navigation} />
    </View>
  );
}
