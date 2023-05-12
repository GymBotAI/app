import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, Image, View } from "react-native";

import Chat from "../components/Chat";

import styles from "../styles";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.h1}>GymBot AI</Text>
      <Chat />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}


