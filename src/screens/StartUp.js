import { View, StatusBar } from "react-native";

import StartupScreen from "../components/StartUp/.Box";

export default function StartUp({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <StartupScreen navigation={navigation} />

      <StatusBar barStyle="light-content" />
    </View>
  );
}
