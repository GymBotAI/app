import { View, ActivityIndicator } from "react-native";

import { colors } from "$styles";

import { Image } from "expo-image";

const logo = require("$assets/GymBotLogo.png");

export default function LoadingScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={logo}
        style={{
          width: 96,
          height: 96,
          resizeMode: "contain",
          marginBottom: 32,
        }}
      />
      <ActivityIndicator size="large" color={colors.blue.default} />
    </View>
  );
}
