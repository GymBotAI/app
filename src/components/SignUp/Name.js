import React, { useState, useRef, useEffect } from "react";
import { TextInput, View, KeyboardAvoidingView, Text } from "react-native";

export let nameValue = ""; // Export the nameValue variable

export default function Name({ onNameChange }) {
  const [name, setName] = useState("");
  const [charactersLeft, setCharactersLeft] = useState(15);
  const [showCount, setShowCount] = useState(false);
  const [red, setRed] = useState(false);

  const handleNameChange = (text) => {
    setName(text);
    onNameChange(text !== ""); // Update the parent component with input status
    nameValue = text;

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
    <KeyboardAvoidingView style={{ flexGrow: 1, overflow: "auto" }}>
      <View style={{ flex: 1 }}>
        <TextInput
          style={{
            height: 40,
            borderColor: "black",
            marginTop: 20,
            fontSize: 18,
            borderBottomWidth: 2,
            paddingVertical: 5,
            paddingHorizontal: 2,
            marginHorizontal: 10,
          }}
          placeholder="Enter your name"
          value={name}
          maxLength={15}
          onChangeText={handleNameChange}
        />
        <View style={{ alignItems: "flex-end", marginRight: 20 }}>
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
    </KeyboardAvoidingView>
  );
}
