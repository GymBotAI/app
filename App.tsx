import { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NavigationScreens } from "./src/types/navigation";

// Luis Things
import { AppContext } from "./src/context/AppContext";
import { supabase } from "./src/api/supabase";
import type { Session } from "@supabase/supabase-js";

// StartUp
import StartUp from "./src/screens/StartUp/FirstScreen";
import SignUp from "./src/screens/StartUp/SignUp";

import Main from "./src/MainApp";

const Stack = createNativeStackNavigator<NavigationScreens>();

export default function App() {
  const [appContext, setAppContext] = useState({
    session: null,
    userData: {},
  });

  const updateSession = (session: Session | null) => {
    setAppContext((prev) => ({ ...prev, session }));

    if (session) {
      supabase
        .from("users")
        .select("*")
        .eq("id", session.user.id)
        .single()
        .then(({ data, error }) => {
          if (error) {
            console.log(error);
          } else {
            setAppContext((prev) => ({ ...prev, userData: data }));
          }
        });
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      updateSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      updateSession(session);
    });
  }, [setAppContext]);

  return (
    <AppContext.Provider value={appContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: "none",
            headerShown: false, // Hide the default header
          }}
        >
          <Stack.Screen name="StartUp" component={StartUp} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
