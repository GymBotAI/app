import { useState, useEffect } from "react";
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import * as Font from "expo-font";

import {fontSize} from '../styles'

export default function ChatInput({
  returnKeyType,
  value,
  multiline,
  onSubmit,
  setValueRef,
  onDeletePrompts,
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

  if (typeof setValueRef?.current == "object") {
    setValueRef.current.setText = setText;
  }

  const _onSubmit = (e) => {
    if (!text) {
      return;
    }

    onDeletePrompts();
    setText("");

    onSubmit(text.trim());
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "white",
        paddingTop: 10,
        paddingBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,
        gap: 5,
        display: "flex",
        flexDirection: "row",
      shadowColor: "black",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
      }}
    >
      <TextInput
        blurOnSubmit={false}
        multiline={typeof multiline == "boolean" ? multiline : false}
        inputMode="text"
        returnKeyType={returnKeyType || "send"}
        numberOfLines={4}
        style={{
          borderWidth: 2,
          borderColor: "#ACB3BF",
          borderRadius: 10,
          color: "black",
          backgroundColor: "white",
          padding: 10,
          justifyContent: "center",
          fontFamily: "roboto-regular",
          fontSize: 16,
          flexGrow: 1,
          flexBasis: 0,
          maxHeight: 100,
        }}
        value={text}
        onChange={(e) => setText(e.nativeEvent.text)}
        onSubmitEditing={_onSubmit}
      />

      <TouchableOpacity
        style={{
          borderRadius: 5,
          alignItems: "center",
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 5,
        }}
        onPress={_onSubmit}
      >
        <Image
          source={require("../../assets/send.png")}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
