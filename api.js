const serverUrl = "https://gymbot-ai-server.luisafk.repl.co";

const secret = [53, 54, 99, 104, 97]
  .map((c) => String.fromCharCode(c))
  .join("");

export function useGymBotAI(messages) {
  if (!messages) {
    messages = [];
  }

  return [
    messages,
    async function (role, message) {
      messages.push({
        role,
        content: message,
      });

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
        messages.push(data.message);
      } else {
        throw new Error("No message received in response");
      }

      return data;
    },
  ];
}
