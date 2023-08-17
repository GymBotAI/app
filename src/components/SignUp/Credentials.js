import React, { useState, useRef, useEffect } from "react";
import { TextInput, View, KeyboardAvoidingView, Text } from "react-native";

export let username = "";
export let password = "";

export default function Name({ onNameChange }) {
    const [username, setUsername] = useState("");
    const [charactersLeft, setCharactersLeft] = useState(15);
    const [showCount, setShowCount] = useState(false);
    const [red, setRed] = useState(false);
  
    const handleUsernameChange = (text) => {
      setUsername(text);
      onUsernameChange(text !== ""); // Update the parent component with input status
      usernameValue = text;
  
      const remainingCharacters = 15 - text.length; // Calculate the number of characters left
      setCharactersLeft(remainingCharacters);
      if (charactersLeft <= 5) {
        setShowCount(true);
      } else {
        setShowCount(false);
      }
      if (charactersLeft === 0) {
        setRed(true);
      } else {
        setRed(false);
      }
    };

    return (
        <View style={{ flex: 1}}>
          <TextInput
            style={{
              height: 40,
              borderColor: "black",
              marginTop: 30,
              fontSize: 18,
              borderBottomWidth: 2,
              paddingVertical: 5,
              paddingHorizontal: 2,
              marginHorizontal: 10,
              width: "80%",
              alignSelf: 'center',
            }}
            placeholder="Enter your Username"
            value={username}
            maxLength={15}
            onChangeText={handleUsernameChange}
          />
          <View style={{ alignItems: "flex-end", marginRight: '12%' }}>
            {showCount && (
              <Text
                style={{
                  color: "#888",
                  position: "absolute",
                  bottom: 7,
                  fontSize: 18,
                }}
              >
                {charactersLeft}
              </Text>
            )}
          </View>
        </View>
    );
}