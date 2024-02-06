import type { ComponentProps } from 'react';
import type { StylesObject } from '$types/styles';

import { SafeAreaView, ScrollView } from 'react-native';

export type ScreenViewProps = ComponentProps<typeof ScrollView> & {
  disableScreenMargin?: boolean;
};

export default function ScreenView(props: ScreenViewProps) {
  return (
    <SafeAreaView>
      <ScrollView
        {...props}
        style={{
          width: '100%',
          height: '100%',
        }}
        contentContainerStyle={[
          {
            padding: 16,
          } satisfies StylesObject,
          ...(props.disableScreenMargin
            ? []
            : [
                {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                } satisfies StylesObject,
              ]),
          props.style,
        ]}
      />
    </SafeAreaView>
  );
}
