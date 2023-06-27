import { StatusBar } from "expo-status-bar";
import { ImageBackground, View } from "react-native";

import Chat from "../components/ChatContainer";
import ScreenHeader from "../components/ScreenHeader";
import GymBotNavigation from "../components/navbar";

import { bgPrimary, white } from "../styles";

export default function Settings({ navigation }) {

  return (
    
      <View
        style={{
          height: "100%",
          width: "100%",
        }}
      >
      
      <GymBotNavigation
      navigation={navigation}
      />
      </View>
  );
}
