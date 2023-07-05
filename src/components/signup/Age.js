import React, { useState } from "react";
import { TextInput, View, StyleSheet, Pressable } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Age( {onAgeChange} ) {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleShow = () => {
    setShowPicker(!showPicker)
  }

  const onChange = ({type}, selectedDate) => {
    onAgeChange(true);

    if (type === 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);

      setDateOfBirth(currentDate.toDateString())
     
  }
}

  return (
    <View style={{ flexGrow: 1, overflow: "auto" }}>
      
        <Pressable onPress={toggleShow}>
          <TextInput 
            style={styles.input}
            placeholder={"Enter your birthday"}
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            editable={false}
            onPressIn={toggleShow}
          />
        </Pressable>
      { 
      (<DateTimePicker
        // style={{borderWidth: 1,borderRadius: 28,}}
        mode='date'
        display='spinner'
        value={date}
        onChange={onChange}
        minimumDate={new Date(1900, 0, 1)} // Replace with your minimum date
        maximumDate={new Date(2030, 0, 1)} // Replace with your maximum date (e.g., new Date() for today)
      />)}

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
    marginHorizontal: 10,
  }
});
