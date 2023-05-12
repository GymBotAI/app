import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, Image, View } from "react-native";

import Chat from "../components/Chat";

import styles from "../styles";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <Chat />
    </>
  );
}


