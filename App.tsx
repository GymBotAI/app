import { useEffect, useState } from "react";
import { StatusBar } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screen Icons
import { FontAwesome5 } from "@expo/vector-icons";

//Luis Things
import { AppContext } from "./src/context/AppContext";
import { supabase } from "./src/api/supabase";
import type { NavigationScreens } from "./src/types/navigation";
import type { Session } from "@supabase/supabase-js";

//StartUp
import StartUp from "./src/screens/StartUp/index";
import SignUp from "./src/screens/SignUp";

//Tab Screens
import Home from "./src/screens/.Home";
import Plans from "./src/screens/.Plans";
import Workouts from "./src/screens/Workout/Workouts";
import Food from "./src/screens/.Food";
import Chat from "./src/screens/.Chat";

//Sub Screens
import DesignWorkout from "./src/screens/Workout/DesignWorkout";
import CompleteDesignContainer from "./src/components/Workout/CompleteWorkout/CompleteDesignContainer";
import Settings from "./src/screens/Settings";

const Stack = createNativeStackNavigator<NavigationScreens>();
const Tab = createBottomTabNavigator();


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

        <Tab.Navigator
        initialRouteName="Home"
        barStyle={{ backgroundColor: 'white'}}
        screenOptions={{
          headerShown: false, // Hide the default header
        }}
        >

          <Tab.Screen name="Home" component={Home}
          options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"home"} size={25} color={color}/>
            ),
          }}
        />
          <Tab.Screen name="Plans" component={Plans}
          options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"clipboard"} size={25} color={color}/>
            ),
          }}
        />
          <Tab.Screen name="Workouts" component={Workouts}
          options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"dumbbell"} size={25} color={color}/>
            ),
          }}
        />
          <Tab.Screen name="Food" component={Food}
          options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"apple-alt"} size={25} color={color}/>
            ),
          }}
        />
          <Tab.Screen name="Chat" component={Chat}
          options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name={"comment"} size={25} color={color}/>
            ),
          }}
        />

        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar barStyle="dark-content" />
    </AppContext.Provider>
  );
}
