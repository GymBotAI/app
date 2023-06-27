import { StatusBar } from "expo-status-bar";
import { ImageBackground, View } from "react-native";

import Chat from "../components/ChatContainer";
import ScreenHeader from "../components/ScreenHeader";
import GymBotNavigation from "../components/navbar";

import { bgPrimary, white } from "../styles";

export default function HomeScreen({ navigation }) {
  
  // Handle navigation actions
  const handlePressChat = () => {
    navigation.navigate('Chat');
  };

  const handlePressWorkouts = () => {
    // Navigation action to workouts screen
  };

  const handlePressSettings = () => {
    navigation.navigate('Account');
  };

  return (
    
      <View
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <ScreenHeader text="GymBot"/>
        <Chat />
      <StatusBar style="auto" />
      
      <GymBotNavigation
        onPressChat={handlePressChat}
        onPressWorkouts={handlePressWorkouts}
        onPressSettings={handlePressSettings}
      />
      </View>
  );
}
