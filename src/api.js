const serverUrl = "https://gymbot-ai-server.luisafk.repl.co";

const secret = [53, 54, 99, 104, 97]
  .map((c) => String.fromCharCode(c))
  .join("");

export async function askGymBotAI(role, message, messages, setMessages) {
  const realMessages = [
    ...messages,
    {
      role,
      content: message,
    },
  ];

  setMessages(() => realMessages);

  const resp = await fetch(`${serverUrl}/chat`, {
    method: "POST",
    body: JSON.stringify({
      messages: realMessages,
      secret,
    }),
    headers: {
      "X-Requested-With": "GymBotAI-App",
      "Cache-Control": "no-store",
    },
  });

  if (!resp.ok) {
    const text = await resp.text();

    throw new Error(text);
  }

  const data = await resp.json();

  if (data.message) {
    setMessages((messages) => [...messages, data.message]);
  } else {
    throw new Error("No message received in response");
  }

  return data;
}
