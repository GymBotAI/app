import React, { useState, useRef, useEffect } from "react";
import { TextInput, View, Keyboard } from "react-native";

import * as Device from "expo-device";



export default function Name({ onNameChange }) {
  const [name, setName] = useState("");

  const handleNameChange = (text) => {
    setName(text);
    onNameChange(text !== ""); // Update the parent component with input status
  };

  return (
    
    <View
      style={{
        flexGrow: 1,
        overflow: "auto",
      }}
    >
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
      onChangeText={handleNameChange}
    />
    </View>
  );
}
