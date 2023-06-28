import { Text, View, TouchableOpacity } from "react-native";
import * as Font from "expo-font";

import { useEffect, useState } from "react";

const styles = {
  button: {
    borderRadius: 1,
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
    flexWrap: "wrap",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1.5,
    backgroundColor: "#dbdbdb",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    gap: 10,
    justifyContent: "center",
    width: "100%",
  },
  text: {
    fontSize: 15,
    fontFamily: "roboto-regular",
    letterSpacing: 0.5,
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
  },
};

export default function Prompts({ onPromptSelection, prompts }) {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "roboto-regular": require("../../assets/fonts/Roboto-Regular.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.buttonContainer}>
      {prompts.map((prompt, i) => (
        <TouchableOpacity
          key={i}
          style={styles.button}
          onPress={() => {
            if (onPromptSelection) {
              onPromptSelection(prompt);
            }
          }}
        >
          <Text style={styles.text}>{prompt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
