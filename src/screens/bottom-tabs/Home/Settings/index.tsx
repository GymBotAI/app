import type { RouteProp } from "@react-navigation/native";
import type { NavigationProp, NavigationScreens } from "$types/navigation";

import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { supabase } from "$api/supabase";

import { colors } from "$styles";

import EditSettings from "./EditSettings";
import Notifications from "./Notifications";

import { FontAwesome5 } from "@expo/vector-icons";

export default function Settings({
  navigation,
  route,
}: {
  navigation: NavigationProp;
  route: RouteProp<NavigationScreens, "Settings">;
}) {
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const editSettingsRef = useRef(null);
  const [editSettingsDimensions, setEditSettingsDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (editSettingsRef.current) {
      editSettingsRef.current.measure((x, y, width, height, pageX, pageY) => {
        setEditSettingsDimensions({ width, height });
      });
    }
  }, []);

  const openNotifications = () => {
    setNotificationsVisible(true);
  };

  const closeNotifications = () => {
    setNotificationsVisible(false);
  };

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.bellContainer}>
          <TouchableOpacity onPress={openNotifications}>
            <FontAwesome5 name="bell" size={30} color={colors.black.lightest} />
          </TouchableOpacity>
        </View>
      </View>

      <EditSettings navigation={navigation} initialData={route.params} />

      <Button
        title="Logout"
        color="red"
        onPress={() => {
          supabase.auth.signOut().then(({ error }) => {
            if (error) {
              Alert.alert("Error signing out", error.toString());
              return;
            }

            navigation.navigate("StartUp");
          });
        }}
      />
      {/* TODO: use colors from global styles file thing @ShiGame45 */}

      <Notifications
        isVisible={notificationsVisible}
        onClose={closeNotifications}
        editSettingsDimensions={editSettingsDimensions}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40,
    height: 90,
    borderWidth: 0.5,
    borderColor: colors.grey.lighter,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black.lightest,
    textAlign: "center",
    paddingLeft: 30,
  },
  bellContainer: {
    paddingRight: 15,
  },
});
