import { useState, useContext, useEffect, useCallback } from "react";
import {
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

import NameOption from "./NameOption";
import AgeOption from "./AgeOption";
import GenderOption from "./GenderOption";
import WeightOption from "./HeightWeightOption";

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
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

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
          setWeight(data.weight);
          setHeight(data.height);
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
        value={weight}
        onChange={setWeight}
        type="number"
      />
      <Option
        label="Height"
        value={height}
        onChange={setHeight}
        type="number"
      />

      <Button
        title="Save"
        onPress={() => {
          Keyboard.dismiss();

          supabase
            .from("users")
            .update({ name, gender, birthday: bday.toString(), weight, height })
            .eq("id", session.user.id)
            .single()
            .then(({ data, error }) => {
              if (error) {
                console.log(error);
              } else {
                console.log(data);
              }
            });
        }}
      />

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
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
  saveButton: {
    backgroundColor: "#333",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  homeButton: {
    backgroundColor: "#333",
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});
