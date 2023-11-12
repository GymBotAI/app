import {
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { colors } from "$styles";

import NotificationsTab from "./NotificationTabs";

import { FontAwesome5 } from "@expo/vector-icons";

export default function Notifications({
  isVisible,
  onClose,
  editSettingsDimensions,
}) {
  const windowHeight = Dimensions.get("window").height;
  const modalHeight = windowHeight - editSettingsDimensions.height;

  const numTabs = 10;

  const tabHeight = 100;
  const totalNotificationsHeight = numTabs * tabHeight;

  const containerHeight = Math.min(modalHeight, totalNotificationsHeight);

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={[styles.centeredView, { height: modalHeight }]}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Notifications</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <FontAwesome5 name="times" size={24} color={colors.black.lighter} />
          </TouchableOpacity>
          <ScrollView style={[styles.scrollView, { height: containerHeight }]}>
            <NotificationsTab
              title="Tab 2"
              description="This is the second tab"
            />
            <NotificationsTab
              title="Tab 2"
              description="This is the second tab"
            />
            <NotificationsTab
              title="Tab 2"
              description="This is the second tab"
            />
            <NotificationsTab
              title="Tab 2"
              description="This is the second tab"
            />
            <NotificationsTab
              title="Tab 2"
              description="This is the second tab"
            />
            <NotificationsTab
              title="Tab 2"
              description="This is the second tab"
            />
            <NotificationsTab
              title="Tab 2"
              description="This is the second tab"
            />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.white.default,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: colors.black.default,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    alignSelf: "flex-end",
    paddingBottom: 20,
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black.lighter,
    textAlign: "center",
    paddingLeft: 20,
  },
  scrollView: {
    maxHeight: 300,
  },
});
