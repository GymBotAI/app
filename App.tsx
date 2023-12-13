import type { NavigationScreens } from "$types/navigation";

import { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { getUserData, supabase } from "$api/supabase";
import { AppContext } from "$context";

import LoadingScreen from "$screens/Loading";
import SignUp from "$screens/StartUp/EnterInfo";
import StartUp from "$screens/StartUp/Login";
import Main from "./src/MainApp";

// https://reactnavigation.org/docs/drawer-navigator#installation
import "react-native-gesture-handler";

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

      if (!data.session) {
        setLoading(false);
      }
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

        getUserData(session).then(({ data, error }) => {
          setIsGettingUserData(false);
          if (error) {
            console.error("[GymBot/App] Error getting user data:", error);
          } else {
            console.debug("[GymBot/App] Got user data");
            setUserData(data);
            setLoading(false);
          }
        });
      }
    }
  }, [session]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <AppContext.Provider
      value={{
        session,
        userData,
        setUserData,
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
