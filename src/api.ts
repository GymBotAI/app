import { useState, useEffect, useCallback } from "react";
import useWebSocket from "react-use-websocket";

import Constants from "expo-constants";

/**
 * The address of the GymBot AI server.
 * See `app.config.ts` for more information.
 */
export const serverAddr: string =
  Constants.expoConfig.extra.serverAddress ??
  Constants.expoConfig.extra.serverAddressDefault;

/**
 * The token that the server sends to indicate
 * that the message stream has ended.
 */
const streamEndToken = "[DONE]";

/**
 * Whether or not to log debug messages.
 */
const debug: boolean = Constants.expoConfig.extra.debugLogs.api;

if (debug) {
  console.debug("[GymBot/API] Using server address:", serverAddr);
}

const secret = [53, 54, 99, 104, 97]
  .map((c) => String.fromCharCode(c))
  .join("");

const workoutScreenRegex = /^\s*\[__WORKOUT__\]\s*$/;

export interface Message {
  role: "user" | "assistant" | "system";
  content?: string;
  type?: "workoutScreen" | "chat";
}

export function useGymBotAI(initialMessages: Message[] = []) {
  const [messages, setMessages] = useState(initialMessages);
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    `${serverAddr}/chat`
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

  if (!hasAuthed) {
    if (debug) {
      console.debug("[GymBot/API] Sending auth secret to chat WS...");
    }

    sendMessage(secret);
    setHasAuthed(true);
  }

  return {
    messages,
    sendMessage: useCallback(
      (msg: string) => {
        if (debug) {
          console.debug("[GymBot/API] Sending message to chat WS:", msg);
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
  };
}
