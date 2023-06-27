import { Text, View, TouchableOpacity, TouchableHighlight } from "react-native";

const styles = {
  button: {
    borderRadius: 1,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    flex: 1,
    flexWrap: 'wrap',
    marginRight: 10,
    borderRadius: 20,
    borderWidth: 1.5,
    backgroundColor: '#dbdbdb',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    fontSize: 15,
    color: "black",
    padding: 10,
    fontFamily: "Georgia",
    letterSpacing: 0.5,
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
  },
  heading: {
    fontSize: 32,
    paddingTop: 20,
    paddingBottom: 5,
    color: "black",
    fontFamily: "Georgia",
    fontWeight: "bold",
    letterSpacing: 0.5,
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
  }
};

export default function Prompts({ onPromptSelection, prompts }) {
  return (
    <View>
      <Text style={styles.heading}>Try These Prompts:</Text>

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
    </View>
  );
}
