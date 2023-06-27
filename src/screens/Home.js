import { StatusBar } from "expo-status-bar";
import { ImageBackground, View } from "react-native";

import Chat from "../components/Chat";
import ScreenHeader from "../components/ScreenHeader";
import GymBotNavigation from "../components/navbar";

import { bgPrimary, white } from "../styles";

export default function HomeScreen({ navigation }) {
  
  // Handle navigation actions
  const handlePressChat = () => {
    // Navigation action to chat screen
  };

  const handlePressWorkouts = () => {
    // Navigation action to workouts screen
  };

  const handlePressSettings = () => {
    // Navigation action to settings screen
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
