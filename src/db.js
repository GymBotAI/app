async function handleInsert(name) {
  console.log("Name is", name);
  try {
    const response = await fetch("http://openhost.ddns.net", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        password: "12345678",
        email: "bob@gmail.com",
      }),
    }).then((response) => response.json());

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
