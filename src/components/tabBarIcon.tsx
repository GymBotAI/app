import type { ComponentProps } from 'react';
import type { Tabs } from 'expo-router';
import type { IconName } from './Icon';

import Icon from './Icon';

export default function tabBarIcon(
  name: IconName,
): NonNullable<ComponentProps<typeof Tabs.Screen>['options']>['tabBarIcon'] {
  return ({ color }) => (
    <Icon name={name} size={28} color={color} style={{ marginBottom: -3 }} />
  );
}
