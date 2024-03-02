import type { ComponentProps } from 'react';

import { Text as DefaultText, StyleSheet } from 'react-native';

import { ColorValue } from '$constants/baseColors';
import colors from '$constants/colors';
import { useStylesContext } from './StylesContext';

export type TextType = 'normal' | 'code';
export type TextVariant = 'header' | 'subheader' | 'normal' | 'sub';
export interface TextProps extends ComponentProps<typeof DefaultText> {
  color?: ColorValue;

  /**
   * @default "normal"
   */
  type?: TextType;

  /**
   * @default "normal"
   */
  variant?: TextVariant;
}

export default function Text(props: TextProps) {
  const stylesFromContext = useStylesContext();

  return (
    <DefaultText
      {...props}
      style={[
        styles[props.variant || 'normal'],
        ...(props.type && props.type != 'normal' ? [styles[props.type]] : []),
        ...(props.color
          ? [
              {
                color: props.color,
              },
            ]
          : []),
        stylesFromContext,
        props.style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: '600',
    color: colors.black.default,
  },
  subheader: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.black.default,
  },
  normal: {
    // @ts-expect-error
    // We can ignore UISizes here because font sizes don't
    // usually follow the same rule
    fontSize: 14,
    fontWeight: 'normal',
    color: colors.black.default,
  },
  sub: {
    fontSize: 12,
    fontWeight: 'normal',
    color: colors.black.lightest,
  },
  code: {
    fontFamily: 'SpaceMono',
    backgroundColor: colors.white.darker,
  },
});
