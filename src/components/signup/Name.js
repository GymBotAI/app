import React, { useState } from "react";
import { TextInput } from "react-native";


export default function Name({ }) {
    const [name, setName] = useState("")

  return (
    <TextInput
    style={{
    height: 40,
    borderColor: "black",
    marginTop: 20,
    fontSize: 16,
    borderBottomWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 2,
    marginHorizontal: -10,
  }}
    placeholder="Enter your name"
    value={name}
    onChangeText={setName}
    />
  );
}