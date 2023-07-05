import { Text, View, TouchableOpacity } from "react-native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

const styles = {
  buttonContainer: {
    marginTop: -10,
    display: "flex",
    flexDirection: "column",
    padding: 10,
    gap: 10,
    justifyContent: "center",
    width: "100%",
    zIndex: 1,
  },
  button: {
    marginLeft: 'auto',
    width: "75%",
    borderRadius: 20,
    padding: 10,
    borderWidth: 1.5,
    borderColor: "#2360e8",
    // backgroundColor: "#2360e8",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "roboto-regular",
    letterSpacing: 0.5,
    color: "#2360e8",
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
