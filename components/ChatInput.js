import { useState } from "react";
import { TextInput, View } from "react-native";

import { font, fontSize } from "../styles";

export default function ChatInput({
  placeholder,
  returnKeyType,
  value,
  multiline,
  onSubmit,
}) {
  const [text, setText] = useState(value);

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
      }}
    >
      <TextInput
        placeholder={placeholder || "Talk to GymBot AI!"}
        multiline={typeof multiline == "boolean" ? multiline : false}
        inputMode="text"
        returnKeyType={returnKeyType || "send"}
        style={{
          width: "100%",
          borderWidth: 2,
          borderColor: "#ACB3BF",
          borderRadius: 10,
          color: "black",
          backgroundColor: "white",
          padding: 10,
          width: "95%",
          justifyContent: "center",
          fontFamily: font,
          fontSize: fontSize,
        }}
        value={text}
        onChange={(e) => setText(e.nativeEvent.text)}
        onSubmitEditing={(e) => {
          const text = e.nativeEvent.text.trim();

          if (!text) {
            return;
          }

          setText("");

          onSubmit(text);
        }}
      />
    </View>
  );
}
