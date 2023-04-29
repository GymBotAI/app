const serverUrl = "https://gymbot-ai-server.luisafk.repl.co";

const secret = [53, 54, 99, 104, 97]
  .map((c) => String.fromCharCode(c))
  .join("");

export async function askGymBotAI(role, message, messages, setMessages) {
  console.debug(0);
  setMessages((messages) => [
    ...messages,
    {
      role,
      content: message,
    },
  ]);
  console.debug(2);

  const resp = await fetch(`${serverUrl}/chat`, {
    method: "POST",
    body: JSON.stringify({
      messages,
      secret,
    }),
    headers: {
      "X-Requested-With": "GymBotAI-App",
    },
  });

  if (!resp.ok) {
    const text = await resp.text();

    throw new Error(text);
  }

  const data = await resp.json();

  if (data.message) {
    console.debug(3);
    setMessages((messages) => [...messages, data.message]);
    console.debug(5);
  } else {
    throw new Error("No message received in response");
  }

  return data;
}
