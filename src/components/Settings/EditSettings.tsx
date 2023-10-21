import { useState, useContext, useEffect, useCallback } from "react";
import {
  Alert,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Keyboard,
  Button,
} from "react-native";

import { AppContext } from "../../context/AppContext";

import { supabase } from "../../api/supabase";

import Option from "./Option";

import { minHeight } from "../../styles";
import { maxHeight } from "../../styles";
import { minWeight } from "../../styles";
import { maxWeight } from "../../styles";

import type { NavigationProp } from "../../types/navigation";

export default function Settings({
  navigation,
}: {
  navigation: NavigationProp;
}) {
  const { session } = useContext(AppContext);

  const [name, setName] = useState("");
  const [bday, setBday] = useState<Date | null>(null);
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  useEffect(() => {
    supabase
      .from("users")
      .select("*")
      .eq("id", session.user.id)
      .single()
      .then(({ data, error }) => {
        if (error) {
          console.log(error);
        } else {
          setName(data.name);
          setBday(new Date(data.birthday));
          setGender(data.gender);
          setWeight(data.weight.toString());
          setHeight(data.height.toString());
        }
      });
  }, [setName, setBday, setGender, setWeight, setHeight]);

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <Option label="Name" value={name} onChange={setName} type="text" />
      <Option label="Age" value={bday} onChange={setBday} type="date" />
      <Option label="Gender" value={gender} onChange={setGender} type="text" />
      <Option
        label="Weight"
        value={weight?.toString()}
        onChange={setWeight}
        type="text"
      />
      <Option
        label="Height"
        value={height?.toString()}
        onChange={setHeight}
        type="text"
      />

      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => {
          Keyboard.dismiss();

          const weightNum = parseInt(weight);
          const heightNum = parseInt(height);

          if (weightNum < minWeight || weightNum > maxWeight) {
            Alert.alert(
              "Invalid weight",
              `Weight must be between ${minWeight} and ${maxWeight}`
            );
            return;
          }

          if (heightNum < minHeight || heightNum > maxHeight) {
            Alert.alert(
              "Invalid height",
              `Height must be between ${minHeight} and ${maxHeight}`
            );
            return;
          }

          supabase
            .from("users")
            .update({
              name,
              gender,
              birthday: bday.toString(),
              weight: weightNum,
              height: heightNum,
            })
            .eq("id", session.user.id)
            .single()
            .then(({ data, error }) => {
              if (error) {
                console.log(error);
              } else {
                navigation.navigate("Home");
              }
            });
        }}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

      <Button
        title="Go back"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    overflow: "auto",
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  saveButton: {
    backgroundColor: "#333",
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 8,
    marginTop: 12,
  },
});
