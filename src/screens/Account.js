import { StatusBar } from "expo-status-bar";
import { ImageBackground, View, Text } from "react-native";

import Chat from "../components/Chat";
import ScreenHeader from "../components/ScreenHeader";

import { bgPrimary } from "../styles";

export default function AccountScreen({ navigation }) {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}
    >
        <View
        style={{
            width: '50%',
            height: '20%',
            alignSelf: 'center',
            marginTop: '75%',
            backgroundColor: 'grey',
        }}
        >

            <Text>

            </Text>

        </View>

        <StatusBar style="auto" />
    </View>
  );
}
