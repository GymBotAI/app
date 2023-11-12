// Icons
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Tab screens
import Chat from "$screens/bottom-tabs/Chat";
import Food from "$screens/bottom-tabs/Food";
import Home from "$screens/bottom-tabs/Home";
import Plans from "$screens/bottom-tabs/Plans";
import Workouts from "$screens/bottom-tabs/Workouts";

import { FontAwesome5 } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export default function MainApp() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, // Hide the default header
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Plans"
        component={Plans}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="clipboard" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Workouts"
        component={Workouts}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="dumbbell" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Food"
        component={Food}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="apple-alt" size={25} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="comment" size={25} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
