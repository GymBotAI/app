import 'react-native-url-polyfill/auto';

import type { AsyncStorageStatic } from '@react-native-async-storage/async-storage';
import type { Session } from '@supabase/supabase-js';
import type { Database } from '$types/database';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error('Missing environment variable EXPO_PUBLIC_SUPABASE_URL');
}

if (!supabaseAnonKey) {
  throw new Error('Missing environment variable EXPO_PUBLIC_SUPABASE_ANON_KEY');
}

let storage: Storage | AsyncStorageStatic | null;
try {
  storage = window.localStorage;
} catch {
  try {
    storage = (await import('@react-native-async-storage/async-storage'))
      .default;
  } catch {
    storage = null;
  }
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

function userIdOrSession(userId: string | Session): string {
  return typeof userId == 'string' ? userId : userId?.user?.id;
}

export type UserData = Database['public']['Tables']['users']['Row'];

export async function getUserData(userId: string | Session) {
  userId = userIdOrSession(userId);

  if (!userId) {
    return Promise.resolve(null);
  }

  return await supabase.from('users').select('*').eq('id', userId).single();
}

export function updateUserData(
  userId: string | Session,
  data: Database['public']['Tables']['users']['Update'],
) {
  userId = userIdOrSession(userId);

  if (!userId) {
    return Promise.resolve(null);
  }

  return supabase.from('users').update(data).eq('id', userId).single();
}
