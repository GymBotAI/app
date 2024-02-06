import type { NamedStylesObject } from '$types/styles';

import { StyleSheet, View } from 'react-native';
import { Stack } from 'expo-router';

import Link from '$components/Link';
import Text from '$components/Text';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text variant="header">This screen doesn't exist.</Text>

        <Link href="/" style={styles.link}>
          Go to home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 16,
    paddingVertical: 16,
  },
});
