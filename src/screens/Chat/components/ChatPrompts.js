import { Text, View, TouchableOpacity } from "react-native";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

const styles = {
  buttonContainer: {
    display: "flex",
    alignItems: "flex-end",
    gap: 6,
    padding: 6,
    paddingTop: 0,
    width: "100%",
    zIndex: 1,
    elevation: 3,
  },
  button: {
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderWidth: 1.5,
    borderColor: "magenta",
    backgroundColor: "transparent",
    shadowColor: colors.black.default,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
};

export default function Prompts({ onPromptSelection, prompts }) {
  const [fontLoaded, setFontLoaded] = useState(false);

  // Load font
  useEffect(() => {
    Font.loadAsync({
      "roboto-regular": require("../../../../assets/fonts/Roboto-Regular.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
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
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              fontFamily: "roboto-regular",
              letterSpacing: 0.5,
              color: "magenta",
              textAlign: "center",
            }}
          >
            {prompt}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
