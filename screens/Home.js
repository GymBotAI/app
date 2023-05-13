import { StatusBar } from "expo-status-bar";
import {
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Chat from "../components/Chat";

import styles from "../styles";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/gymbgdark.jpg')} resizeMode="cover" style={styles.body}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.image}>
          <Text style={styles.h1}>GymBot AI</Text>
          <Chat />
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}
