import { Text, View } from "react-native";

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

export default function Prompts({}) {
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
            <Text
            style={styles}
            >
            "Give me a chest a workout!"
            </Text>

            <Text
            style={styles}
            >
            "How can I strengthen my knee to prevent injury?"
            </Text>
            <Text
            style={styles}
            >
            "What are the health benefits of cardio?"
            </Text>


        </View>
    </>   
 
  );
}