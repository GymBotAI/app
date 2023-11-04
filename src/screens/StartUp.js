import { useContext } from "react";
import { View, StatusBar } from "react-native";

import { AppContext } from "../context/AppContext";

import StartupScreen from "../components/StartUp/.Box";

export default function StartUp({ navigation }) {
  const { session } = useContext(AppContext);

  if (session?.user) {
    return navigation.navigate("Home");

    // TODO: there should be a better way to do this,
    // like <NavigationContainer> initialState.
    // This is a temporary workaround.
  }

  return (
    <View style={{ flex: 1 }}>
      <StartupScreen navigation={navigation} />

      <StatusBar barStyle="light-content" />
    </View>
  );
}
