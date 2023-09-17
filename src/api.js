import { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";

import Constants from "expo-constants";

/**
 * The address of the GymBot AI server.
 * See `app.config.ts` for more information.
 * @type {string}
 */
export const serverAddr =
  Constants.expoConfig.extra.serverAddress ??
  Constants.expoConfig.extra.serverAddressDefault;

/**
 * The token that the server sends to indicate
 * that the message stream has ended.
 */
const streamEndToken = "[DONE]";

/**
 * Whether or not to log debug messages.
 * @type {boolean}
 */
const debug = Constants.expoConfig.extra.debugLogs.api;

if (debug) {
  console.debug("[GymBot/API] Using server address:", serverAddr);
}

const secret = [53, 54, 99, 104, 97]
  .map((c) => String.fromCharCode(c))
  .join("");

export function useGymBotAI(initialMessages = []) {
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

  return [
    messages,
    (msg) => {
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
    setMessages,
  ];
}
