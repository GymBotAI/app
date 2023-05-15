import { Text, View, TouchableOpacity } from "react-native";

const styles = {
    
    fontSize: 16,  
    color: "white",
    padding: 10,
    fontFamily: "Georgia",
    letterSpacing: 0.5,
    width: '100%',
    justifyContent: "center",
    textAlign: "center",
    //backgroundColor: 'black',
    zIndex: 2,
    flexGrow: 1
}

export default function Prompts({onPromptSelection}) {

    const pressHandler = (text) => {
        onPromptSelection(text);
    }

  return (
    <>
        <Text
        style={{
            fontSize: 32,
            paddingTop: 20,
            paddingBottom: 5,
            color: "white",
            fontFamily: "Georgia",
            fontWeight: 'bold',
            letterSpacing: 0.5,
            width: "100%",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 2,
        }}
        >
        Try These Prompts:
        </Text>

        <View style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: 10,
        }}>
            <TouchableOpacity
            key='prompt1'
            onPress={() => pressHandler("Give me a chest workout")}
            >
                <Text
                style={styles}
                >
                "Give me a chest a workout!"
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            key='prompt2'
            onPress={() => pressHandler("How can I strengthen my knee to prevent injury?")}
            >
                <Text
                style={styles}
                >
                "How can I strengthen my knee to prevent injury?"
                </Text>
            </TouchableOpacity>

            <TouchableOpacity key='prompt3'>
                <Text
                style={styles}
                >
                "What are the health benefits of cardio?"
                </Text>
            </TouchableOpacity>


        </View>
    </>   
 
  );
}
