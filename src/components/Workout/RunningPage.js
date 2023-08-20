import React from 'react';
import { View, StyleSheet, Modal, Dimensions, TouchableOpacity, Text, Time } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CustomPage({ isVisible, onClose }) {
  const windowWidth = Dimensions.get('window').width;

  let StepsTaken = 500;
  let Kilometers = 1;
  let time = new Date().getHours() + ":" + new Date().getMinutes()+ ":"+new Date().getSeconds();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
    >
      <View style={[styles.centeredView, { width: windowWidth }]}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <FontAwesome5 name="long-arrow-alt-left" size={24} color="#adadad" />
        </TouchableOpacity>
        <View style={styles.modalView}>
          <View style={styles.container}>
           <Text style={styles.mapNotThereText}>Insert Map Here</Text>
          </View>
          <Text style={styles.redText}>Steps: {StepsTaken}</Text>
          <Text style={styles.greenText}>Km's: {Kilometers}</Text>
          <Text style={styles.blueText}>Time: {time}</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 28,
    paddingTop: 60,
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
  container: {
    backgroundColor: 'grey',
    width: 500,
    height: 362,
  },
  redText: {
    color: 'red',
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 38,
  },
  greenText: {
    color: 'green',
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  blueText: {
    color: 'blue',
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  mapNotThereText: {
   textAlign: "center",
   paddingTop: 150,
   fontSize: 40,
   color: '#adadad'
  },
});
