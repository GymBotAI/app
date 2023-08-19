import React, { useRef, useState, useEffect } from "react";
import { View, StatusBar, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";
import EditSettings from "../components/Settings/EditSettings";
import { FontAwesome5 } from "@expo/vector-icons";
import Notifications from "../components/Settings/Notifications";

export default function Settings({ navigation }) {
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const editSettingsRef = useRef(null);
  const [editSettingsDimensions, setEditSettingsDimensions] = useState({ width: 0, height: 0 });

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
        <Text style={styles.title}>{"Settings"}</Text>
        <View style={styles.bellContainer}>
          <TouchableOpacity onPress={openNotifications}>
            <FontAwesome5 name="bell" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <EditSettings ref={editSettingsRef} navigation={navigation} />
      <StatusBar barStyle="dark" />
      <Notifications isVisible={notificationsVisible} onClose={closeNotifications} editSettingsDimensions={editSettingsDimensions} />
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
    borderColor: "#c9c9c9",
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    paddingLeft: 30,
  },
  bellContainer: {
    paddingRight: 15,
  },
});
