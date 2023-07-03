import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, StyleSheet, Pressable, Platform } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Age() {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleShow = () => {
    setShowPicker(!showPicker)
    console.log(showPicker)
  }

  const onChange = ({type}, selectedDate) => {
    if (type == 'set') {
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
      />)}

      {!showPicker && (
        <Pressable onPress={toggleShow}>

        <TextInput 
          style={styles.input}
          placeholder="Sat Aug 21 2004"
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
  }, input: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginTop: 20,
    fontSize: 20,
  }
});
