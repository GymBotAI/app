import type { Session } from '@supabase/supabase-js';
import type { UserData } from '$api/supabase';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AppState } from 'react-native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import { getUserData, supabase } from '$api/supabase';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const SessionContext = createContext<Session | null>(null);
export const useSession = () => useContext(SessionContext);

const UserDataContext = createContext<UserData | null>(null);
export const useUserData = () => useContext(UserDataContext);

AppState.addEventListener('change', (state) => {
  if (state == 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function RootLayout() {
  // Supabase Auth session and user data
  const [session, setSession] = useState<Session | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);

  // Update session
  const updateSession = useCallback((newSession: Session | null) => {
    setSession(newSession);
    if (newSession) {
      getUserData(newSession).then((data) => {
        console.log(data);
        if (data && !data.error && data.data) {
          setUserData(data.data);
        }
      });
    } else {
      setUserData(null);
    }
  }, []);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      updateSession(session);
    });

    // Listen for auth changes
    supabase.auth.onAuthStateChange((_event, session) => {
      updateSession(session);
    });
  }, []);

  // Load fonts
  const [fontsLoaded, fontsError] = useFonts({
    SpaceMono: require('$assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (fontsError) throw fontsError;
  }, [fontsError]);

  // Hide the splash screen once fonts are loaded and either:
  //  1) the user is not logged in (no session), or
  //  2) the user is logged in and user data has loaded
  useEffect(() => {
    if (fontsLoaded && (!session || userData)) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, session, userData]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SessionContext.Provider value={session}>
      <UserDataContext.Provider value={userData}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </UserDataContext.Provider>
    </SessionContext.Provider>
  );
}
