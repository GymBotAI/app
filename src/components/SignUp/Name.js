import React, { useState, useRef, useEffect } from "react";
import { TextInput, View, Keyboard, Text } from "react-native";

export let nameValue = ""; // Export the nameValue variable

export default function Name({ onNameChange }) {
  const [name, setName] = useState("");
  const [charactersLeft, setCharactersLeft] = useState(15);

  const handleNameChange = (text) => {
    setName(text);
    onNameChange(text !== ""); // Update the parent component with input status
    nameValue = text;

    const remainingCharacters = 15 - text.length; // Calculate the number of characters left
    setCharactersLeft(remainingCharacters);
  };

  return (
    <View style={{ flexGrow: 1, overflow: "auto" }}>
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
        <Text style={{ color: "#888" }}>{charactersLeft}</Text>
      </View>
    </View>
  );
}
