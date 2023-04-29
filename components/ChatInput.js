import { TextInput, View } from "react-native";

import styles from "../styles";

export default function ChatInput({
  placeholder,
  returnKeyType,
  value,
  multiline,
  onSubmit,
}) {
  return (
    <View style={styles.ChatInput}>
      <TextInput
        placeholder={placeholder || "Talk to GymBot AI!"}
        multiline={typeof multiline == "boolean" ? multiline : false}
        inputMode='text'
        returnKeyType={returnKeyType || "send"}
        style={styles.input}
        value={value}
        onSubmitEditing={(e) => onSubmit(e.nativeEvent.text.trim())}
      />
    </View>
  );
}
