import { Dimensions, StatusBar } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Tab screens
import Chat from "$screens/bottom-tabs/Chat";
import Dev from "$screens/bottom-tabs/Dev";
import Food from "$screens/bottom-tabs/Food";
import Home from "$screens/bottom-tabs/Home";
import Plans from "$screens/bottom-tabs/Plans";
import Workouts from "$screens/bottom-tabs/Workouts";

// Icons
import { FontAwesome5 } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const size = Math.min(width, height) * 0.068;
const fontSize = size * 0.45;
const marginTop = size * -0.05;
console.log(marginTop);

const Tabs = createBottomTabNavigator();

export default function MainApp() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, // Hide the default header
        tabBarLabelStyle: {
          fontSize: fontSize, // Adjust the font size as needed
          marginTop: marginTop,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Plans"
        component={Plans}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="clipboard" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Workouts"
        component={Workouts}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="dumbbell" size={size} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="Food"
        component={Food}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="apple-alt" size={size} color={color} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="comment" size={size} color={color} />
          ),
        }}
      />
      {__DEV__ && (
        <Tabs.Screen
          name="Dev"
          component={Dev}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="terminal" size={size} color={color} />
            ),
          }}
        />
      )}
    </Tabs.Navigator>
  );
}
