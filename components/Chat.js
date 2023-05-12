import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useState } from "react";

import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

import styles from "../styles";
import { askGymBotAI } from "../api";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.Chat}>
          <ChatMessages messages={messages} />
          <ChatInput style={styles.ChatInput}
          onSubmit={(text) => askGymBotAI("user", text, messages, setMessages)}
        />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};