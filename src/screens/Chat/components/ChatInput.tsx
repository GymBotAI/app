import { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";
import * as Font from "expo-font";

import type { MutableRefObject } from "react";
import { colors } from "../../../components/styles";

export type SetValueRef = MutableRefObject<{
  setText: (text: string) => void;
}>;

export default function ChatInput({
  disabled,
  value,

  onSubmit,
  setValueRef,
  onDeletePrompts,
}: {
  disabled?: boolean;
  value?: string;

  onSubmit: (text: string) => void;
  setValueRef?: SetValueRef;
  onDeletePrompts: () => void;
}) {
  const [text, setText] = useState(value || "");
  const [fontLoaded, setFontLoaded] = useState(false);

  // Load font
  useEffect(() => {
    Font.loadAsync({
      "roboto-regular": require("../../../../assets/fonts/Roboto-Regular.ttf"),
    }).then(() => {
      setFontLoaded(true);
    });
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  if (typeof setValueRef?.current === "object") {
    setValueRef.current.setText = setText;
  }

  const handleOnSubmit = () => {
    Keyboard.dismiss();

    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    onDeletePrompts();
    setText("");

    onSubmit(trimmedText);
  };

  return (
    <View
      style={{
        borderTopWidth: 1,
        borderColor: colors.grey.lighter,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: colors.grey.lightest,
        shadowColor: colors.black.default,
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2,
      }}
    >
      <TextInput
        blurOnSubmit={false}
        editable={!disabled}
        multiline
        inputMode="text"
        numberOfLines={4}
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: colors.grey.lighter,
          borderRadius: 20,
          backgroundColor: colors.white.default,
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
          backgroundColor: colors.blue.default,
          padding: 6.2,
          paddingHorizontal: 8,
          paddingRight: 6,
        }}
        onPress={handleOnSubmit}
      >
        <Image
          source={require("../../../../assets/send.png")}
          style={{ height: 22, width: 22 }}
        />
        {/* <AntDesign name="arrowright" size={24} color="white" /> */}
      </TouchableOpacity>
    </View>
  );
}
