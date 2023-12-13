import { View } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Text from "$components/Text";
import ButtonDevScreen from "./screens/Button";
import TextDevScreen from "./screens/Text";

const Drawer = createDrawerNavigator();

export default function Dev() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Group>
        <Drawer.Screen name="Button" component={ButtonDevScreen} />
        <Drawer.Screen name="Text" component={TextDevScreen} />
      </Drawer.Group>
    </Drawer.Navigator>
  );
}

function Home() {
  return (
    <View
      style={{ display: "flex", flexDirection: "column", gap: 12, padding: 12 }}
    >
      <Text text="Dev docs" variant="header-big" />
      <Text text="This screen is only shown in the bottom navbar in dev mode." />
    </View>
  );
}
