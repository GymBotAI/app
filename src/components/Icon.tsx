import type { IconProps as DefaultIconProps } from '@expo/vector-icons/build/createIconSet';
import type { UISize } from '$types/styles';

import { useStylesContext } from './StylesContext';

import { Feather } from '@expo/vector-icons';

export type IconName = keyof (typeof Feather)['glyphMap'];
export type IconProps = DefaultIconProps<IconName> & {
  size?: UISize;
};

export default function Icon(props: IconProps) {
  const stylesFromContext = useStylesContext();

  return <Feather {...props} style={[stylesFromContext, props.style]} />;
}
