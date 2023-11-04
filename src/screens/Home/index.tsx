import { View, StatusBar } from "react-native";

import HomeScreen from "./MainScreen/HomeContainer";
import Settings from "./Settings"

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NavigationScreens } from "../../types/navigation";

const Stack = createNativeStackNavigator<NavigationScreens>();

export default function Workouts({ navigation }) {
  return (
    <View style={{height: "100%", width: "100%"}}>

        <Stack.Navigator
        screenOptions={{
        animation: 'none',
        headerShown: false, // Hide the default header
        }}
        >

          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Settings" component={Settings}/>

        </Stack.Navigator>

      <StatusBar barStyle="dark-content" />

    </View>
  );
}
