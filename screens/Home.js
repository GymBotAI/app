import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";

import MessageInputContainer from "../components/MessageInputContainer";

import styles from "../styles";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.h1}>GymBot AI</Text>
      <MessageInputContainer onSubmit={(text) => console.log(text)} />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
