import { httpServerAddr } from "../app-config";

export async function login(
  username: string,
  password: string
): Promise<
  | {
      success: true;
      userId: string;
    }
  | {
      success: false;
      error: string;
    }
> {
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
    return {
      success: true,
      userId: responseText,
    };
  }

  return {
    success: false,
    error: responseText,
  };
}
