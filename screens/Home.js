import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";

import ChatInput from "../components/ChatInput";

import styles from "../styles";

import { useGymBotAI } from "../api";

export default function HomeScreen({ navigation }) {
  const [messages, askGymBotAI] = useGymBotAI();

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.h1}>GymBot AI</Text>
      <ChatInput
        onSubmit={(text) =>
          askGymBotAI("user", text).then(() => {
            console.log(messages);
          })
        }
      />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
