import React, { useState } from "react";
import { TextInput } from "react-native";

// import DateTimePicker from "@react-native-community/datetimepicker";

export default function Age({ }) {
    const [birthdate, setBirthdate] = useState(new Date()); // Set initial value to the current date

  return (
    <TextInput/>
//     <DateTimePicker
//     value={birthdate}
//     mode="date"
//     display="spinner"
//     onChange={(event, selectedDate) => {
//       if (selectedDate) {
//         setBirthdate(selectedDate);
//       }
//     }}
//   />
  );
}