import { useState, useContext, useEffect, useCallback } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Keyboard,
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

  const handleNameChange = useCallback(
    (newName: string) => {
      supabase
        .from("users")
        .update({ name: newName })
        .eq("id", session.user.id)
        .single()
        .then(({ data, error }) => {
          if (error) {
            console.log(error);
          } else {
            console.log(data);
          }
        });

      setName(newName);
    },
    [setName]
  );

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      {/* <View style={styles.container}> */}

      <Option label="Name" value={name} onChange={handleNameChange} />
      {/* <WeightOption question="Name" value={name} setValue={setName} /> */}
      <AgeOption question="Age" value={bday} setValue={setBday} />
      <GenderOption question="Gender" value={gender} setValue={setGender} />
      <WeightOption
        question="Weight"
        value={weight}
        setValue={setWeight}
        unit={"kg"}
        upper={maxWeight}
        lower={minWeight}
        met="kg"
        imp="lb"
        conversion={2.20462262185}
      />
      <WeightOption
        question="Height"
        value={height}
        setValue={setHeight}
        unit={"cm"}
        upper={maxHeight}
        lower={minHeight}
        met="cm"
        imp="in"
        conversion={0.393701}
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
