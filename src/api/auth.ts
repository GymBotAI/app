import Constants from "expo-constants";

import { supabase } from "./supabase";

import type { User } from "@supabase/supabase-js";

/**
 * Whether or not to log debug messages.
 */
const debug: boolean = __DEV__ && Constants.expoConfig.extra.debugLogs.auth;

export async function login(
  email: string,
  password: string
): Promise<
  | {
      success: true;
      user: User;
    }
  | {
      success: false;
      error: Error;
    }
> {
  if (debug) {
    console.debug(
      `[GymBot/API/auth] Logging in with email "${email}" and password "${password}"`
    );
  }

  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (response.data.user) {
    if (debug) {
      console.debug(
        `[GymBot/API/auth] Logged in as user ID "${response.data.user.id}"`
      );
    }

    return {
      success: true,
      user: response.data.user, // TODO: return the user object instead
    };
  }

  if (debug) {
    console.debug("[GymBot/API/auth] Failed to log in:", response.error);
  }

  return {
    success: false,
    error: response.error,
  };
}
