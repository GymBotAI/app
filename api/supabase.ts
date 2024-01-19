import "react-native-url-polyfill/auto";

import type { PostgrestSingleResponse, Session } from "@supabase/supabase-js";
import type { Database } from "$types/database";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

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

function userIdOrSession(userId: string | Session): string | null {
  return typeof userId == "string" ? userId : userId?.user?.id;
}

export async function getUserData(
  userId: string | Session,
): Promise<
  PostgrestSingleResponse<Database["public"]["Tables"]["users"]["Row"]>
> {
  userId = userIdOrSession(userId);

  if (!userId) {
    return Promise.resolve(null);
  }

  return await supabase.from("users").select("*").eq("id", userId).single();
}

export function updateUserData(
  userId: string | Session,
  data: Database["public"]["Tables"]["users"]["Update"],
) {
  userId = userIdOrSession(userId);

  if (!userId) {
    return Promise.resolve(null);
  }

  return supabase.from("users").update(data).eq("id", userId).single();
}
