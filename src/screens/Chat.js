import { View, StatusBar } from "react-native";

import ChatContainer from "../components/ChatContainer";
import ChatHeader from "../components/ChatHeader";
import GymBotNavigation from "../components/navbar";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <ChatHeader text="GymBot"/>
      <ChatContainer />
      <StatusBar barStyle="light-content" />

      <GymBotNavigation navigation={navigation} />
    </View>
  );
}
