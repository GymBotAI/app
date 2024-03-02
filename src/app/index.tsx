import { Image } from 'react-native';
import { Redirect } from 'expo-router';

import logoText from '$assets/images/logo-text.png';
import ScreenView from '$components/ScreenView';
import { useSession } from '$root-layout';

export default function RootScreen() {
  const session = useSession();

  if (session) {
    return <Redirect href="/home" />;
  }

  return (
    <ScreenView>
      <Image source={logoText} />
    </ScreenView>
  );
}
