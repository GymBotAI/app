import { useCallback } from "react";
import { Alert, View } from "react-native";

import Button from "$components/Button";

export default function ButtonDevScreen() {
  const onPress = () => {
    Alert.alert("Button pressed!");
  };

  return (
    <View
      style={{ display: "flex", flexDirection: "column", gap: 12, padding: 12 }}
    >
      <Button text="Large button" size="large" onPress={onPress} />
      <Button text="Medium button" size="medium" onPress={onPress} />
      <Button text="Small button" size="small" onPress={onPress} />
    </View>
  );
}
