import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const bgPrimary = "#1360dd";
const fgPrimary = "#ffffff";

export default function App() {
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.h1}>GymBot AI</Text>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: bgPrimary,
    width: "100%",
    height: "100%",
  },
  h1: {
    fontSize: 32,
    color: fgPrimary,
  },
});
