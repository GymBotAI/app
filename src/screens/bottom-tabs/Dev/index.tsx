import { Text, View } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Button from "./screens/Button";

const Drawer = createDrawerNavigator();

export default function Dev() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Group>
        <Drawer.Screen name="Button" component={Button} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
}

function Home() {
  return (
    <View
      style={{ display: "flex", flexDirection: "column", gap: 12, padding: 12 }}
    >
      <Text>Dev docs</Text>
      <Text>This screen is only shown in the bottom navbar in dev mode.</Text>
    </View>
  );
}
