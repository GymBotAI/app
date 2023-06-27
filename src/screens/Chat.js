import { StatusBar } from "expo-status-bar";
import { ImageBackground, View } from "react-native";

import ChatContainer from "../components/ChatContainer";
import ScreenHeader from "../components/ScreenHeader";
import GymBotNavigation from "../components/navbar";

import { bgPrimary, white } from "../styles";

export default function HomeScreen({ navigation }) {

  return (
    
      <View
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <ScreenHeader text="GymBot" minitext="Talk to"/>
        <ChatContainer />
      <StatusBar style="auto" />
      
      <GymBotNavigation
      navigation={navigation}
      />
      </View>
  );
}
