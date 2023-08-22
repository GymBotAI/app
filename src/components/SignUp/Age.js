import React, { useState } from "react";
import { TextInput, View, StyleSheet, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {minDate, maxDate} from "../../styles";

export let dateValue = new Date(); // Initialize ageValue as an empty string

export default function Age({ onAgeChange, ageVal, setAgeVal }) {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleShow = () => {
    setShowPicker(!showPicker);
    ageVal = calculateAge(dateValue);
  };

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(ageInYears);
  };


  const onChange = ({ type }, selectedDate) => {
    onAgeChange(true);
    if (type === "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      const formattedDate = currentDate.toLocaleDateString(); // Format the date as a string
      setDateOfBirth(formattedDate);
      dateValue = selectedDate; // Assign the formatted date to ageValue
      console.log("Date:")
      console.log(dateValue)
      console.log("Age")
      ageVal = calculateAge(dateValue)
      console.log(ageVal)
    }
  };

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

      <DateTimePicker
        mode="date"
        display="spinner"
        value={date}
        onChange={onChange}
        minimumDate={minDate} // Replace with your minimum date
        maximumDate={maxDate} // Set the maximum date to today's date minus 12 years
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "black",
    marginTop: 20,
    fontSize: 18,
    borderBottomWidth: 2,
    paddingVertical: 5,
    paddingHorizontal: 2,
    marginHorizontal: 10,
  },
});