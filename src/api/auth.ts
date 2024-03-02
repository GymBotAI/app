import type { User } from '@supabase/supabase-js';

import { debugLogs } from '$api/debug-logs';
import { supabase } from '$api/supabase';

/**
 * Whether or not to log debug messages.
 */
const debug: boolean = __DEV__ && debugLogs.auth;

export async function login(
  email: string,
  password: string,
): Promise<
  | {
      success: true;
      user: User;
    }
  | {
      success: false;
      error: Error | null;
    }
> {
  if (debug) {
    console.debug(
      `[GymBot/API/auth] Logging in with email "${email}" and password "${password}"`,
    );
  }

  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (response.data.user) {
    if (debug) {
      console.debug(
        `[GymBot/API/auth] Logged in as user ID "${response.data.user.id}"`,
      );
    }

    return {
      success: true,
      user: response.data.user,
    };
  }

  if (debug) {
    console.debug('[GymBot/API/auth] Failed to log in:', response.error);
  }

  return {
    success: false,
    error: response.error,
  };
}

export const logout = supabase.auth.signOut.bind(supabase.auth);

export async function signup(
  email: string,
  password: string,
): ReturnType<typeof login> {
  if (debug) {
    console.debug(
      `[GymBot/API/auth] Signing up in with email "${email}" and password "${password}"`,
    );
  }

  const response = await supabase.auth.signUp({
    email,
    password,
  });

  if (response.data.user) {
    if (debug) {
      console.debug(
        `[GymBot/API/auth] Signed up as user ID "${response.data.user.id}"`,
      );
    }

    return {
      success: true,
      user: response.data.user,
    };
  }

  if (debug) {
    console.debug('[GymBot/API/auth] Failed to sign up:', response.error);
  }

  return {
    success: false,
    error: response.error,
  };
}
