import { TextInput, View } from "react-native";

import styles from "../styles";

export default function messageInputContainer({
  placeholder,
  returnKeyType,
  value,
  multiline,
  onSubmit,
}) {
  return (
    <View style={styles.messageInputContainer}>
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
