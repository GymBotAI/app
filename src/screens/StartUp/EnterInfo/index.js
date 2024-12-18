import { View } from "react-native";

import MainHeader from "$components/MainHeader";
import SignUpContainer from "./SignUpContainer";

export default function SignUp({ navigation }) {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <MainHeader text="GymBot" minitext="Welcome to" />
      <SignUpContainer navigation={navigation} />
      <View
        style={{ paddingTop: 25, paddingBottom: 25, paddingHorizontal: 0 }}
      />
    </View>
  );
}
