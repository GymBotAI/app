import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./path_to_your_sound_icon.png')} style={styles.icon} />
        <Text style={styles.time}>73:26</Text>
        <Image source={require('./path_to_your_menu_icon.png')} style={styles.icon} />
      </View>
      <Text style={styles.title}>Exercises</Text>
      <View style={styles.exerciseList}>
        {/* Map over your exercises and render each exercise item here */}
        <View style={styles.exerciseItem}>
          <Text style={styles.exerciseName}>Euring</Text>
          <Text style={styles.exerciseTime}>03:38</Text>
        </View>
        {/* ... add more exercise items */}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Workout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  time: {
    fontSize: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  exerciseList: {
    // Add styles for the list of exercises
  },
  exerciseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    // ... additional styles for each exercise item
  },
  exerciseName: {
    fontSize: 16,
  },
  exerciseTime: {
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});