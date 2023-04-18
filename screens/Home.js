import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";

import styles from "../styles";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.h1}>GymBot AI</Text>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
