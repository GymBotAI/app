import React, { useState, useEffect } from "react";
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import * as Font from "expo-font";
import { AntDesign } from "@expo/vector-icons";

import { fontSize } from "../styles";

export default function ChatInput({
  returnKeyType,
  value,
  multiline,
  onSubmit,
  setValueRef,
  onDeletePrompts,
  // onInput,
}) {
  const [text, setText] = useState(value);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "roboto-regular": require("../../assets/fonts/Roboto-Regular.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  if (typeof setValueRef?.current === "object") {
    setValueRef.current.setText = setText;
  }

  const handleOnSubmit = () => {
    if (!text) {
      return;
    }

    // onInput();

    onDeletePrompts();
    setText("");

    onSubmit(text.trim());
  };

  return (
    <View
      style={{
        borderTopWidth: 1,
        borderColor: "#E2E2E2",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: "#F5F5F5",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2,
      }}
    >
      <TextInput
        blurOnSubmit={false}
        multiline={typeof multiline === "boolean" ? multiline : false}
        inputMode="text"
        returnKeyType={returnKeyType || "send"}
        numberOfLines={4}
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: "#D8D8D8",
          borderRadius: 20,
          backgroundColor: "white",
          paddingHorizontal: 12,
          paddingVertical: 8,
          fontFamily: "roboto-regular",
          fontSize: 16,
          maxHeight: 100,
        }}
        value={text}
        onChange={(e) => setText(e.nativeEvent.text)}
        onSubmitEditing={handleOnSubmit}
      />

      <TouchableOpacity
        style={{
          marginLeft: 16,
          borderRadius: 12,
          backgroundColor: "#1877F2",
          padding: 6.2,
          paddingHorizontal: 8,
          paddingRight: 6,
        }}
        onPress={handleOnSubmit}
      >
        <Image source={require("../../assets/send.png")}
          style={{height: 22, width: 22}}
        />
        {/* <AntDesign name="arrowright" size={24} color="white" /> */}
      </TouchableOpacity>
    </View>
  );
}
