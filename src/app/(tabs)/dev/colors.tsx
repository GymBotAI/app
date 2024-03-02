import type { StylesObject } from '$types/styles';

import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { CheckBox } from '$components/CheckBox';
import ScreenView from '$components/ScreenView';
import Text from '$components/Text';
import { specialColors, specialColorsAmount } from '$constants/baseColors';
import colors from '$constants/colors';

export default function DevColorsScreen() {
  const [colorNameMaxWidth, setColorNameMaxWidth] = useState(0);
  const [showSpecialColors, setShowSpecialColors] = useState(true);

  const colorNameStyles = [
    styles.colorName,
    { width: colorNameMaxWidth || null },
  ];

  return (
    <ScreenView style={styles.container}>
      <Text>
        Use these colors when styling components. They can be imported from{' '}
        <Text type="code">$constants/colors</Text>.
      </Text>

      <Text>For example, to use the primary default color:</Text>
      <Text type="code">
        import type {'{'} NamedStylesObject {'}'} from '$types/styles';
        {'\n\n'}
        import colors from "$constants/colors";
        {'\n\n'}
        // ...
        {'\n\n'}
        const styles = StyleSheet.create({'{'}
        {'\n  '}
        myStyle: {'{\n    '}
        color: colors.primary.default
        {'\n  }\n}'}
        );
      </Text>

      <CheckBox
        label="Show special colors"
        value={showSpecialColors}
        onInput={setShowSpecialColors}
        style={styles.showSpecialColorsCheckBox}
      />

      <View style={styles.colorsContainer}>
        <View style={styles.colorContainer}>
          <Text variant="sub" style={colorNameStyles} />

          {Object.keys(colors.primary).map((key) => (
            <Text variant="sub" key={key} style={styles.colorShade}>
              {key}
            </Text>
          ))}
        </View>

        {Object.entries(colors).map(([colorName, color], i) =>
          !showSpecialColors && i < specialColorsAmount ? null : (
            <View
              style={
                // add a gap between special colors and others
                i == specialColorsAmount && showSpecialColors
                  ? [
                      { marginTop: 12 } satisfies StylesObject,
                      styles.colorContainer,
                    ]
                  : styles.colorContainer
              }
              key={colorName}
            >
              <Text
                variant="sub"
                style={colorNameStyles}
                onLayout={(e) => {
                  if (e.nativeEvent.layout.width > colorNameMaxWidth) {
                    setColorNameMaxWidth(e.nativeEvent.layout.width);
                  }
                }}
              >
                {colorName}
              </Text>

              {Object.values(color).map((colorValue, i) => (
                <View
                  key={i}
                  style={[styles.color, { backgroundColor: colorValue }]}
                />
              ))}
            </View>
          ),
        )}
      </View>
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  colorsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  colorContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  colorName: {
    textAlign: 'right',
  },
  colorShade: {
    fontSize: 8,
    textAlign: 'center',
    width: 32,
  },
  color: {
    borderRadius: 16,
    width: 32,
    height: 32,
    textAlign: 'center',
  },
});
