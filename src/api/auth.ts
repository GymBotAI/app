import { httpServerAddr } from "../app-config";

export async function login(username: string, password: string) {
  return await fetch(`${httpServerAddr}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((r) => r.json());
}
