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
    borderColor: "#5585f2",
    backgroundColor: "transparent",
    shadowColor: "black",
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
              fontFamily: fontLoaded ? "roboto-regular" : null,
              letterSpacing: 0.5,
              color: "#5585f2",
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
