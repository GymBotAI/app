import { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";

const serverHost = "gymbot-ai-server.luisafk.repl.co";
const streamEndToken = "[DONE]";

const secret = [53, 54, 99, 104, 97]
  .map((c) => String.fromCharCode(c))
  .join("");

export function useGymBotAI(initialMessages = []) {
  const [messages, setMessages] = useState(initialMessages);
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    `wss://${serverHost}/chat`
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
    sendMessage(secret);
    setHasAuthed(true);
  }

  const _sendMessage = (msg) => {
    setMessages((a) => [
      ...a,
      {
        role: "user",
        content: msg,
      },
    ]);

    sendMessage(msg);
  };

  return [messages, _sendMessage, setMessages];
}
