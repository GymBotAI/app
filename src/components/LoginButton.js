import React, { } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function LoginButtons({ text, question, navigation }) {

  const handleCreateAccount = () => {
    navigation.navigate('Home');
    // Navigate to create account screen or perform create account action
    // onCreateAccount();
  };

  return (
    <View style={styles.container}>

        <Text style={styles.text}>{text}</Text>
            
        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        
            <Text style={styles.buttonText}>{question}</Text>

        </TouchableOpacity>

      </View>


  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    text: {
        color: "white",
        fontSize: 16,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#ddd",
    },
    button: {
      marginLeft: 8,
    }
});
