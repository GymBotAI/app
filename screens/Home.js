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
import ScreenHeader from "../components/ScreenHeader";

import styles from "../styles";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/gymbgdark.jpg')} resizeMode="cover" style={styles.body}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.image}>
          <ScreenHeader text="GymBot AI" />
          <Chat />
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}
