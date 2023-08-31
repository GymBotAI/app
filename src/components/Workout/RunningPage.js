import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Modal, Dimensions, TouchableOpacity, Text, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import MapAndPos from './runningMap&Pos';

export default function CustomPage({ isVisible, onClose }) {
  const [kilometers, setKilometers] = useState(0);
  const [StepsTaken, setStepsTaken] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [calibratedBool, setcalibratedBool] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [time, setTime] = useState({hours: 0, mins: 0, secs: 0});
  const intervalRef = useRef(null);

  const updateTotalDistance = (distance) => {
    setKilometers(distance);
  };

  const updateCalibratedBool = (calibrated) => {
    setcalibratedBool(true);
  }

  const windowWidth = Dimensions.get('window').width;

  const StartAndEndTime = () => {
    if(!timerStarted){
      console.log("Timer has started");
      setTime({
        hours: 0,
        mins: 0,
        secs: 0
      });
      setTimerStarted(true);
    } else {
      setTimerStarted(false);
    }
  };

  useEffect(() => {
    if(timerStarted){
      intervalRef.current = setInterval(() => {
        setTime(prevTime => {
          if(prevTime.secs < 59){
            return {...prevTime, secs: prevTime.secs + 1};
          } else if(prevTime.mins < 59){
            return {...prevTime, secs: 0, mins: prevTime.mins + 1};
          } else {
            return {...prevTime, secs: 0, mins: 0, hours: prevTime.hours + 1};
          }
        });
      }, 1000);
    }
    return () => {
      if(intervalRef.current){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  }, [timerStarted]);

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={[styles.centeredView, { width: windowWidth }]}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <FontAwesome5 name="long-arrow-alt-left" size={24} color="#adadad" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => {
            if (calibratedBool) {
              setIsActive(!isActive);
              StartAndEndTime();
            } else {
              Alert.alert(
                'Error',
                'You cannot start a run while calibration is occurring, this will at most take 1 min',
                { text: 'OK', onPress: () => console.log('OK Pressed') }
              );
            }
          }}
          >
          <FontAwesome5 name="arrow-right" size={24} color={calibratedBool && isActive ? "green" : "black"} />
        </TouchableOpacity>

        <View style={styles.modalView}>
          <View style={styles.container}>
            <MapAndPos updateTotalDistance={updateTotalDistance} updateCalibrated={updateCalibratedBool} isActive={isActive} />
          </View>
          <Text style={styles.redText}>Steps: {StepsTaken}</Text>
          <Text style={styles.greenText}>Km's: {kilometers}</Text>
          <Text style={styles.blueText}>Time {time.hours} : {time.mins} : {time.secs}</Text>
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
    height: 440,
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
  toggleButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
});