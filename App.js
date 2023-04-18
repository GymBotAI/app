import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const bgPrimary = "#1360dd";
const fgPrimary = "#ffffff";

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.h1}>GymBot AI</Text>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: bgPrimary,
    width: "100%",
    height: "100%",
  },
  h1: {
    fontSize: 32,
    color: fgPrimary,
  },
});
