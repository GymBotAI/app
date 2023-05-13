import { useState } from "react";
import { TextInput, View, Button } from "react-native";

import { font, fontSize } from "../styles";

export default function ChatInput({
  placeholder,
  returnKeyType,
  value,
  multiline,
  onSubmit,
}) {
  const [text, setText] = useState(value);

  const _onSubmit = (e) => {
    if (!text) {
      return;
    }

    setText("");

    onSubmit(text);
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "white",
        paddingTop: 10,
        paddingBottom: 20,
        paddingRight: 10,
        paddingLeft: 10,
        gap: 5,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <TextInput
        blurOnSubmit={false}
        placeholder={placeholder || "Talk to GymBot AI!"}
        multiline={typeof multiline == "boolean" ? multiline : false}
        inputMode="text"
        returnKeyType={returnKeyType || "send"}
        style={{
          borderWidth: 2,
          borderColor: "#ACB3BF",
          borderRadius: 10,
          color: "black",
          backgroundColor: "white",
          padding: 10,
          justifyContent: "center",
          fontFamily: font,
          fontSize: fontSize,
          flexGrow: 1,
        }}
        value={text}
        onChange={(e) => setText(e.nativeEvent.text)}
        onSubmitEditing={_onSubmit}
      />
      <Button
        title="Send"
        style={{
          backgroundColor: "blue",
        }}
        onPress={_onSubmit}
      />
    </View>
  );
}
