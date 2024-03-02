import { StyleSheet } from 'react-native';

import Link from '$components/Link';
import ScreenView from '$components/ScreenView';
import Text from '$components/Text';
import WorkoutStats from '$components/WorkoutStats';
import { useUserData } from '$root-layout';

export default function HomeScreen() {
  const userData = useUserData();

  return (
    <ScreenView>
      <Text variant="header">Hello, {userData?.name}</Text>

      <WorkoutStats />

      <Text variant="subheader">Workout of the day</Text>

      {/* ... */}

      <Text variant="subheader">
        Explore workouts
        <Link href="/workouts" style={styles.allWorkoutsLink}>
          View all
        </Link>
      </Text>

      {/* ... */}
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  allWorkoutsLink: {
    marginLeft: 'auto',
    width: 'auto',
  },
});
