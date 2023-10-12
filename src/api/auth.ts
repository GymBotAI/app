import { httpServerAddr } from "../app-config";

export async function login(username: string, password: string) {
  const response = await fetch(`${httpServerAddr}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const responseText = await response.text();

  if (response.ok) {
    return responseText;
  }

  throw new Error(`[api/auth/login] Error ${response.status}: ${responseText}`);
}
