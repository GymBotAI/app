import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  Keyboard,
} from "react-native";


export default function Option({question,value,setValue}) {
    const [name, setName] = useState('Daniel');
    
    return (
      <View style={{
        display:'flex',
        flexDirection: 'row',
        backgroundColor: '#c9c9c9',
        padding: 15,
        marginHorizontal: -10,
      }}>
      <Text style={{
        marginRight: 'auto',
        fontSize: 15,
        alignSelf: 'center',
      }}>{question}</Text>
      <TextInput
        style={{
          fontSize: 15,
    padding: 1,
    alignSelf: 'right',
    }}
        value={value}
        onChange={setValue}
      />
      </View>

    )

}