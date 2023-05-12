import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./components/Chat";


import styles from "./styles";

import HomeScreen from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <HomeScreen />
    // <NavigationContainer styles={styles.NavBar}>
    //   <Stack.Navigator>
    //     <Stack.Screen name='Home' component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
