import React, { useState } from "react";

import DateTimePicker from "@react-native-community/datetimepicker";

export default function Age({ }) {
    const [name, setName] = useState("")

  return (
    <DateTimePicker
    value={birthdate}
    mode="date"
    display="spinner"
    onChange={(event, selectedDate) => {
      if (selectedDate) {
        setBirthdate(selectedDate);
      }
    }}
  />
  );
}