import React from 'react';
import { View, StyleSheet, Modal, Dimensions, TouchableOpacity, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import NotificationsTab from './NotificationTabs';

export default function Notifications({ isVisible, onClose, editSettingsDimensions }) {
  const windowHeight = Dimensions.get('window').height;
  const modalHeight = windowHeight - editSettingsDimensions.height;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
    >
      <View style={[styles.centeredView, { height: modalHeight }]}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Notifications</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <FontAwesome5 name="times" size={24} color="black" />
          </TouchableOpacity>
          <NotificationsTab title="Tab 2" description="This is the second tab" />
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
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  closeButton: {
    alignSelf: 'flex-end',
    paddingBottom: 20,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    paddingLeft: 20,
  },
});