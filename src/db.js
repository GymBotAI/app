import axios from "axios";

async function handleInsert(name) {
  console.log("Name is", name);
  try {
    const response = await axios.post("http://openhost.ddns.net", {
      username: name,
      password: "12345678",
      email: "bob@gmail.com",
    });

    if (response.data.success) {
      Alert.alert("Record inserted successfully");
    } else {
      Alert.alert("Failed to insert record");
    }
  } catch (error) {
    console.error("Error inserting record:", error);
  }
}

export default handleInsert;
