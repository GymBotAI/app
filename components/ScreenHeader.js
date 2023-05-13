import { Text } from 'react-native';

import styles from '../styles'

export default function ScreenHeader({ text }) {
  return (
    <Text style={styles.h1}>
      {text}
    </Text>
  );
}