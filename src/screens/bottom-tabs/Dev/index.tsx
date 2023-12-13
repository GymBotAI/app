import { createDrawerNavigator } from "@react-navigation/drawer";

import Button from "./screens/Button";

const Drawer = createDrawerNavigator();

export default function Workouts() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Button" component={Button} />
    </Drawer.Navigator>
  );
}
