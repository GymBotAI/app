import { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';

import { login, logout } from '$api/auth';
import Button from '$components/Button';
import ScreenView from '$components/ScreenView';
import Text from '$components/Text';
import { useSession, useUserData } from '$root-layout';

export default function DevScreenHome() {
  const session = useSession();
  const userData = useUserData();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  return (
    <ScreenView>
      <Text variant="header">Dev docs</Text>

      <Text variant="subheader">Session</Text>
      <Text type="code">{JSON.stringify(userData, null, 2)}</Text>
      <Text type="code">{JSON.stringify(session, null, 2)}</Text>

      {session ? (
        <Button
          shrink
          iconLeft="log-out"
          onPress={() => {
            logout().catch((err) => {
              Alert.alert('Error logging out', err.toString());
            });
          }}
        >
          Logout
        </Button>
      ) : (
        <>
          <TextInput
            placeholder="Email"
            value={loginEmail}
            onChangeText={setLoginEmail}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            value={loginPassword}
            onChangeText={setLoginPassword}
            autoCapitalize="none"
            secureTextEntry
          />

          <Button
            shrink
            iconLeft="log-in"
            onPress={() => {
              login(loginEmail, loginPassword).then((resp) => {
                if (!resp.success) {
                  Alert.alert(
                    resp.error?.name || 'Login error',
                    resp.error?.message || '',
                  );
                }
              });
            }}
          >
            Login
          </Button>
        </>
      )}
    </ScreenView>
  );
}
