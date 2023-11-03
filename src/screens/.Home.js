import { View, Text, StyleSheet, StatusBar } from "react-native";

import GymBotNavigation from "../components/NavBar";
import HomeContainer from "../components/Home/HomeContainer";
import ScreenHeader from "../components/ScreenHeader";

export default function Home({ navigation }) {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <HomeContainer navigation={navigation} />

      <StatusBar barStyle="dark-content" />

      <GymBotNavigation navigation={navigation} currentScreen={"Home"} />
    </View>
  );
}
