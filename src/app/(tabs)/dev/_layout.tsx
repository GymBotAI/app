import { Drawer } from 'expo-router/drawer';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DevLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="index" options={{ title: 'Home' }} />
        <Drawer.Screen name="sitemap" options={{ title: 'Sitemap' }} />
        <Drawer.Screen name="colors" options={{ title: 'Colors' }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
