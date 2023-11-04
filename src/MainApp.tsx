import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Icons
import { FontAwesome5 } from "@expo/vector-icons";

// Tab screens
import Home from "./screens/Home";
import Plans from "./screens/Plans";
import Workouts from "./screens/Workout";
import Food from "./screens/Food";
import Chat from "./screens/Chat";

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
