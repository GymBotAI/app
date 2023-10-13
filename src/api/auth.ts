import Constants from "expo-constants";

import { httpServerAddr } from "./address";

/**
 * Whether or not to log debug messages.
 */
const debug: boolean = __DEV__ && Constants.expoConfig.extra.debugLogs.auth;

export async function login(
  username: string,
  password: string
): Promise<
  | {
      success: true;
      userId: number;
    }
  | {
      success: false;
      error: string;
    }
> {
  if (debug) {
    console.debug(
      `[GymBot/API/auth] Logging in with username "${username}" and password "${password}"`
    );
  }

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
    if (debug) {
      console.debug(`[GymBot/API/auth] Logged in as user ID "${responseText}"`);
    }

    return {
      success: true,
      userId: parseInt(responseText),
    };
  }

  if (debug) {
    console.debug(
      `[GymBot/API/auth] Failed to log in: ${response.status} "${responseText}"`
    );
  }

  return {
    success: false,
    error: responseText,
  };
}
