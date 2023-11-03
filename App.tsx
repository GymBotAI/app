import { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppContext } from "./src/context/AppContext";

import { supabase } from "./src/api/supabase";

import Home from "./src/screens/.Home";
import Plans from "./src/screens/.Plans";
import Workouts from "./src/screens/.Workouts";
import Food from "./src/screens/.Food";
import Chat from "./src/screens/.Chat";

import Account from "./src/screens/StartUp";
import Settings from "./src/screens/Settings";
import SignUp from "./src/screens/SignUp";
import DesignWorkout from "./src/screens/DesignWorkout";
import CompleteDesignContainer from "./src/components/Workout/CompleteWorkout/CompleteDesignContainer";

import type { NavigationScreens } from "./src/types/navigation";
import type { Session } from "@supabase/supabase-js";

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
            headerShown: false, // Hide the default header
            animation: "none",
          }}
        >
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="SignUp" component={SignUp} />

          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Plans" component={Plans} />
          <Stack.Screen name="Workouts" component={Workouts} />
          <Stack.Screen name="Food" component={Food} />
          <Stack.Screen name="Chat" component={Chat} />

          <Stack.Screen name="DesignWorkout" component={DesignWorkout} />
          <Stack.Screen
            name="CompleteWorkout"
            component={CompleteDesignContainer}
          />

          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
