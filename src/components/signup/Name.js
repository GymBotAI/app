import React, { useState } from "react";
import { TextInput } from "react-native";


export default function Name({ onNameChange }) {
  const [name, setName] = useState("");

  const handleNameChange = (text) => {
    setName(text);
    onNameChange(text !== ""); // Update the parent component with input status
  };

  return (
    <TextInput
      style={{
        height: 40,
        borderColor: "black",
        marginTop: 20,
        fontSize: 18,
        borderBottomWidth: 2,
        paddingVertical: 5,
        paddingHorizontal: 2,
        marginHorizontal: -10,
      }}
      placeholder="Enter your name"
      value={name}
      onChangeText={handleNameChange}
    />
  );
}
