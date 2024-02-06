import type { PressableProps } from 'react-native';

import { useState } from 'react';
import { Pressable, View } from 'react-native';

import Icon from '$components/Icon';
import colors from '$constants/colors';
import Text from './Text';

export interface CheckBoxProps extends PressableProps {
  label?: string;
  value?: boolean;
  onInput?: (checked: boolean) => void;
}

export function CheckBox(props: CheckBoxProps) {
  const [checked, setChecked] = useState(props.value);

  return (
    <Pressable
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      }}
      onPress={() => {
        setChecked(!checked);
        props.onInput?.(!checked);
      }}
    >
      <View
        style={{
          borderColor: colors.black.default,
          borderWidth: 1,
          borderRadius: 4,
          width: 16,
          height: 16,
        }}
      >
        {checked ? (
          <Icon
            name="check"
            style={{
              margin: 1,
            }}
          />
        ) : null}
      </View>

      {props.label ? <Text>{props.label}</Text> : null}
    </Pressable>
  );
}
