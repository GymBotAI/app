import { useState } from "react";
import { TextInput, View } from "react-native";

import styles from "../styles";

export default function ChatInput({
  placeholder,
  returnKeyType,
  value,
  multiline,
  onSubmit,
}) {
  const [text, setText] = useState(value);

  return (
    <View style={styles.ChatInput}>
      <TextInput
        placeholder={placeholder || "Talk to GymBot AI!"}
        multiline={typeof multiline == "boolean" ? multiline : false}
        inputMode="text"
        returnKeyType={returnKeyType || "send"}
        style={styles.input}
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
