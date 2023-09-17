import React, { useState, useEffect } from "react";
import { View, Button } from "react-native";

import * as Google from "expo-auth-session/providers/google";
export default function LoginBox({ navigation }) {
  const [accessToken, setAccessToken] = React.useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "786220056964-0f7og3638d2f0k45gvvvdtunsh8oeka1.apps.googleusercontent.com",
    iosClientId:
      "786220056964-v02qb0i54sm5845n96idkugj0f5s2lm0.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  const getUserData = () => {};

  return (
    <View style={{ backgroundColor: "white" }}>
      <Button
        title={accessToken ? "Get User Data" : "Login"}
        onPress={
          accessToken
            ? getUserData
            : () => promptAsync({ useProxy: "true", showInRecents: "true" })
        }
      />
    </View>
  );
}
