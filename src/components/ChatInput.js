import { useState } from "react";
import { TextInput, View, TouchableOpacity, Image } from "react-native";

import { font, fontSize } from "../styles";

export default function ChatInput({
  returnKeyType,
  value,
  multiline,
  onSubmit,
  setValueRef,
  onDeletePrompts,
}) {
  const [text, setText] = useState(value);

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
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
        gap: 5,
        display: "flex",
        flexDirection: "row",
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
          fontFamily: font,
          fontSize: fontSize,
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
            width: 45,
            height: 45,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
