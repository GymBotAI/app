import { useEffect, useState } from "react";
import { StatusBar } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screen Icons
import { FontAwesome5 } from "@expo/vector-icons";

//Tab Screens
import Home from "./screens/.Home";
import Plans from "./screens/.Plans";
import Workouts from "./screens/Workout/Workouts";
import Food from "./screens/.Food";
import Chat from "./screens/.Chat";

const Tab = createBottomTabNavigator();


export default function App() {


  return (
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
      <StatusBar barStyle="dark-content" />
      </NavigationContainer>
  );
}
