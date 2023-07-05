import { View, StatusBar } from "react-native";

import ChatContainer from "../components/ChatContainer";
import MainHeader from "../components/MainHeader";
import GymBotNavigation from "../components/navbar";

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <MainHeader text="GymBot" minitext="Talk to" />
      <ChatContainer />
      <StatusBar barStyle="light-content" />

      <GymBotNavigation navigation={navigation} />
    </View>
  );
}
