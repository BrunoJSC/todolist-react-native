import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import { Feather } from "@expo/vector-icons";

import Checkbox from "expo-checkbox";

import { useState } from "react";

interface TaskProps {
  text: string;
  onRemove: () => void;
  test: boolean;
}

export function Task({ text, onRemove }: TaskProps) {
  const [checkState, setCheckState] = useState(false);
  return (
    <View style={styles.message}>
      <Checkbox
        value={checkState}
        onValueChange={setCheckState}
        color={checkState ? "#4630EB" : undefined}
        style={{ borderRadius: 50, padding: 7, borderColor: "#4EA8DE" }}
      />
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Feather name="trash" size={25} color="#ff0000" />
      </TouchableOpacity>
    </View>
  );
}
