import { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { NavigationScreens } from "./src/types/navigation";

// Luis Things
import { AppContext } from "./src/context";
import { supabase } from "./src/api/supabase";

// StartUp
import StartUp from "./src/screens/StartUp/Login";
import SignUp from "./src/screens/StartUp/EnterInfo";

import Main from "./src/MainApp";

const Stack = createNativeStackNavigator<NavigationScreens>();

export default function App() {
  const [loading, setLoading] = useState(true);

  const [isGettingUserData, setIsGettingUserData] = useState(false);

  const [session, setSession] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    console.debug("[GymBot/App] Getting Supabase session");
    supabase.auth.getSession().then(({ data }) => {
      console.debug("[GymBot/App] Got Supabase session:", !!data.session);
      setSession(data.session);
      setLoading(false);
    });

    // Subscribe to auth changes and return the unsubscribe function
    console.debug("[GymBot/App] Subscribing to Supabase auth changes");
    return supabase.auth.onAuthStateChange((e, newSession) => {
      console.debug("[GymBot/App] Supabase auth change:", e, !!newSession);
      setSession(newSession);
    }).data.subscription.unsubscribe;
  }, []);

  useEffect(() => {
    if (session?.user) {
      console.debug("[GymBot/App] User logged in:", session.user.id);

      if (!isGettingUserData) {
        console.debug("[GymBot/App] Getting user data");
        setIsGettingUserData(true);
        supabase
          .from("users")
          .select("*")
          .eq("id", session.user.id)
          .single()
          .then(({ data, error }) => {
            setIsGettingUserData(false);
            if (error) {
              console.error("[GymBot/App] Error getting user data:", error);
            } else {
              console.debug("[GymBot/App] Got user data");
              setUserData(data);
            }
          });
      }
    }
  }, [session]);

  if (loading) {
    return null;
  }

  return (
    <AppContext.Provider
      value={{
        session,
        userData,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: "none",
            headerShown: false, // Hide the default header
          }}
          initialRouteName={session?.user ? "Main" : "StartUp"}
        >
          <Stack.Screen name="StartUp" component={StartUp} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
