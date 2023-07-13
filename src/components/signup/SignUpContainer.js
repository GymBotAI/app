import { View, KeyboardAvoidingView } from "react-native";

import * as Device from "expo-device";
import Question from "./Question";

export default function SignUpContainer({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Device.osName == "Android" ? "height" : "padding"}
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Question navigation={navigation} />
      </View>
    </KeyboardAvoidingView>
  );
}
