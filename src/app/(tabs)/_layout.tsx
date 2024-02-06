import { Tabs } from 'expo-router';

import tabBarIcon from '$components/tabBarIcon';
import { useClientOnlyValue } from '$components/useClientOnlyValue';
import colors from '$constants/colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary.default,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: tabBarIcon('home'),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="plans"
        options={{
          title: 'Plans',
          tabBarIcon: tabBarIcon('clipboard'),
        }}
      />
      {__DEV__ ? (
        <Tabs.Screen
          name="dev"
          options={{
            title: 'Dev',
            tabBarIcon: tabBarIcon('code'),
          }}
        />
      ) : null}
    </Tabs>
  );
}
