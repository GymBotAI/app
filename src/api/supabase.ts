import "react-native-url-polyfill/auto";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

import type { Database } from "../types/database";
import type { Session } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

function userIdOrSession(userId: string | Session) {
  return typeof userId == "string" ? userId : userId.user.id;
}

export function getUserData(userId: string | Session) {
  return supabase
    .from("users")
    .select("*")
    .eq("id", userIdOrSession(userId))
    .single();
}

export function updateUserData(
  userId: string | Session,
  data: Partial<Database["public"]["Tables"]["users"]["Update"]>
) {
  return supabase
    .from("users")
    .update(data)
    .eq("id", userIdOrSession(userId))
    .single();
}
