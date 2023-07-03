import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, StyleSheet, Pressable, Platform } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Age() {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleShow = () => {
    setShowPicker(true)
  }

  const onChange = ({type}, selectedDate) => {
    if (type === 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === 'android') {
        toggleShow();
      } else {
        toggleShow();
        setDateOfBirth(currentDate.toDateString())
      }

    } else {
      toggleShow();
    }
  }

  return (
    <View>
      {showPicker && 
      (<DateTimePicker
        mode='date'
        display='spinner'
        value={date}
        onChange={onChange}
        minimumDate={new Date(1900, 0, 1)} // Replace with your minimum date
        maximumDate={date} // Replace with your maximum date (e.g., new Date() for today)
      />)}

      {!showPicker && (
        <Pressable onPress={toggleShow}>
          <TextInput 
            style={styles.input}
            placeholder={date.toDateString()}
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            editable={false}
            onPressIn={toggleShow}
          />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dateText: {
    fontSize: 24, // Adjust the font size as needed
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: "black",
    marginTop: 20,
    fontSize: 18,
    borderBottomWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 2,
    marginHorizontal: -10,
  }
});
