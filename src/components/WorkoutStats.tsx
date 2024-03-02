import type { UISize } from '$types/styles';

import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Card from '$components/Card';
import Icon from '$components/Icon';
import Text from '$components/Text';
import colors from '$constants/colors';
import { months } from '$utils/date';

import { Circle } from 'react-native-progress';

export default function WorkoutStats() {
  const [containerWidth, setContainerWidth] = useState(0);
  const circleSize = containerWidth / 2 - 56;

  return (
    <Card
      onLayout={(e) => {
        setContainerWidth(e.nativeEvent.layout.width);
      }}
    >
      <Text variant="subheader" color={colors.white.default}>
        {months[new Date().getMonth()]} activity
      </Text>

      <View style={styles.statsContainer}>
        <Card color={colors.white.default}>
          <Circle
            size={circleSize}
            borderWidth={0 satisfies UISize}
            thickness={8 satisfies UISize}
            color={colors.blue.lightest}
            progress={0.2} // TODO: use context
          />

          <View style={styles.circleContents}>
            <Text variant="subheader">20</Text>
          </View>

          <Text style={styles.circleLabel}>Workouts</Text>
        </Card>
        <Card color={colors.white.default}>
          <Circle
            size={circleSize}
            borderWidth={0 satisfies UISize}
            thickness={8 satisfies UISize}
            color={colors.green.lightest}
            progress={0.8} // TODO: use context
          />

          <View style={styles.circleContents}>
            <Text variant="subheader">20</Text>
          </View>

          <Text style={styles.circleLabel}>Runs</Text>
        </Card>
      </View>

      {/* TODO: use <Button/> component*/}
      <Icon name="calendar" size={32} style={styles.calendarButton} />
    </Card>
  );
}

const styles = StyleSheet.create({
  statsContainer: {
    marginTop: 12,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circleContents: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleLabel: {
    textAlign: 'center',
    marginTop: 8,
  },
  calendarButton: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
});
