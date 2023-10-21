import { useState, useEffect, useCallback, useContext } from "react";
import useWebSocket from "react-use-websocket";

import { AppContext } from "../components/context/AppContext";

import { debugLogs } from "./debug-logs";
import { wsServerAddr } from "./address";

/**
 * The token that the server sends to indicate
 * that the message stream has ended.
 */
const streamEndToken = "[DONE]";

/**
 * Whether or not to log debug messages.
 */
const debug: boolean = __DEV__ && debugLogs.chat;

if (debug) {
  console.debug("[GymBot/API/chat] Using server address:", wsServerAddr);
}

const workoutScreenRegex = /^\s*\u0007\s*$/;

export interface Message {
  role: "user" | "assistant" | "system";
  content?: string;
  type?: "workoutScreen" | "chat";
}

export function useGymBotAI(initialMessages: Message[] = []) {
  const { session } = useContext(AppContext);

  const [messages, setMessages] = useState(initialMessages);
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    `${wsServerAddr}/chat`,
    {
      shouldReconnect() {
        return true;
      },
      onOpen() {
        if (debug) {
          console.debug("[GymBot/API/chat] Sending auth secret to chat WS...");
        }

        sendMessage(session.access_token);
        setHasAuthed(true);
      },
      onClose() {
        setHasAuthed(false);
      },
    }
  );
  const [hasAuthed, setHasAuthed] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    if (lastMessage != null) {
      if (lastMessage.data == streamEndToken) {
        setIsStreaming(false);

        if (
          messages[messages.length - 1].role == "assistant" &&
          workoutScreenRegex.test(messages[messages.length - 1].content)
        ) {
          setMessages((a) => {
            a[a.length - 1].type = "workoutScreen";
            delete a[a.length - 1].content;
            return a;
          });
        }

        return;
      }

      setMessages((a) => {
        const previousData = isStreaming ? a.pop().content : "";

        setIsStreaming(true);

        return [
          ...a,
          {
            role: "assistant",
            content: previousData + lastMessage.data,
          },
        ];
      });
    }
  }, [lastMessage, setMessages]);

  return {
    messages,
    sendMessage: useCallback(
      (msg: string) => {
        if (debug) {
          console.debug("[GymBot/API/chat] Sending message to chat WS:", msg);
        }

        setMessages((a) => [
          ...a,
          {
            role: "user",
            content: msg,
          },
        ]);

        sendMessage(msg);
      },
      [setMessages, sendMessage]
    ),
    setMessages,
    readyState,
    hasAuthed,
  };
}
