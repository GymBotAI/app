import type { JSX } from 'react';
import type { PressableProps, StyleProp, ViewStyle } from 'react-native';
import type { IconName } from '$components/Icon';

import { Pressable } from 'react-native';

import Icon from '$components/Icon';
import { StylesContext } from '$components/StylesContext';
import Text from '$components/Text';
import { ColorObject } from '$constants/baseColors';
import colors from '$constants/colors';

export interface ButtonProps extends PressableProps {
  children?: JSX.Element | string;
  iconLeft?: IconName;
  iconRight?: IconName;

  color?: ColorObject;

  shrink?: boolean;

  style?: ViewStyle;
}

export default function Button(props: ButtonProps) {
  const styles: StyleProp<ViewStyle> = [
    {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      padding: 8,
      borderRadius: 8,
    },
  ];

  if (props.shrink) {
    styles.push({
      alignSelf: 'flex-start',
    });
  }

  styles.push(props.style);

  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        ...styles,
        {
          backgroundColor: (props.color || colors.primary)[
            pressed ? 'lighter' : 'default'
          ],
        },
      ]}
    >
      <StylesContext.Provider value={{ color: colors.white.default }}>
        {props.iconLeft ? <Icon name={props.iconLeft} /> : null}
        {typeof props.children == 'string' ? (
          <Text>{props.children}</Text>
        ) : (
          props.children
        )}
        {props.iconRight ? <Icon name={props.iconRight} /> : null}
      </StylesContext.Provider>
    </Pressable>
  );
}
