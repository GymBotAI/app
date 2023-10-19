import { useEffect,useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppContext } from "./src/components/context/AppContext";

import { supabase } from "./src/api/supabase";

import Home from "./src/screens/navbarScreens/Home";
import Plans from "./src/screens/navbarScreens/Plans";
import Workouts from "./src/screens/navbarScreens/Workouts";
import Food from "./src/screens/navbarScreens/Food";
import Chat from "./src/screens/navbarScreens/Chat";

import Account from "./src/screens/StartUp";
import Login from "./src/screens/LogIn";
import Settings from "./src/screens/Settings";
import SignUp from "./src/screens/SignUp";
import DesignWorkout from "./src/screens/DesignWorkout";

import type { NavigationScreens } from "./src/types/navigation";

const Stack = createNativeStackNavigator<NavigationScreens>();

export default function App() {
  const [appContext, setAppContext] = useState({
    session:null});

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setAppContext((prev) => ({ ...prev, session }))
      })
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setAppContext((prev) => ({ ...prev, session }))
      })
    }, [setAppContext])

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
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Plans" component={Plans} />
        <Stack.Screen name="Workouts" component={Workouts} />
        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="Chat" component={Chat} />

        <Stack.Screen name="DesignWorkout" component={DesignWorkout} />

        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer></AppContext.Provider>
  );
}
