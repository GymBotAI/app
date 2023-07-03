import React, { useState } from "react";
import { Text, View } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Age() {
  const [date, setDate] = useState(new Date()); // Set initial value to the current date

  const onChange =(event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    console.log(date)
  }

  return (
    <View>

        <DateTimePicker
        testID="dateTimePicker"
        value={date}
        is24Hour={true}
        display='default'
        onChange={onChange}
        />

    </View>
  );
}
