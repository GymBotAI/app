import type { ComponentProps } from 'react';
import type { StylesObject } from '$types/styles';

import { View } from 'react-native';

import { ColorValue } from '$constants/baseColors';
import colors from '$constants/colors';

export default function Card(
  props: ComponentProps<typeof View> & { color?: ColorValue },
) {
  return (
    <View
      {...props}
      style={[
        {
          borderRadius: 12,
          backgroundColor: props.color || colors.primary.default,
          padding: 16,
        } satisfies StylesObject,
        props.style,
      ]}
    />
  );
}
