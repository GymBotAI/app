import { View, Text, StyleSheet, StatusBar } from "react-native";

import GymBotNavigation from "../components/navbar";
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

      <HomeContainer />

      <StatusBar barStyle="dark-content" />

      <GymBotNavigation navigation={navigation} />
    </View>
  );
}
