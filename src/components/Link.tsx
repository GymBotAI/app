import type { AllRoutes, LinkProps as DefaultLinkProps } from 'expo-router';
import type { TextProps } from './Text';

import { StyleSheet } from 'react-native';
import { Link as DefaultLink } from 'expo-router';

import colors from '$constants/colors';
import Text from './Text';

export type LinkProps = Pick<DefaultLinkProps<AllRoutes>, 'href' | 'onPress'> &
  Omit<TextProps, 'style'> & {
    style?: Parameters<typeof StyleSheet.compose>[1];
  };

export default function Link(props: LinkProps) {
  return (
    <DefaultLink href={props.href} onPress={props.onPress} asChild>
      <Text
        {...props}
        style={StyleSheet.flatten([
          {
            color: colors.secondary.default,
          },
          props.style,
        ])}
      />
    </DefaultLink>
  );
}
