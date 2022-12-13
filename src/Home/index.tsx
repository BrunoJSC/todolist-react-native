import { StatusBar } from "expo-status-bar";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import { Header } from "../components/Header";

import { styles } from "./style";

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { useState } from "react";
import { Task } from "../components/Task";

export function Home() {
  const [text, setText] = useState<string>("");
  const [task, setTask] = useState<string[]>([]);

  function handleAddTask() {
    setTask((prevState) => [...prevState, text]);
    if (task.includes(text)) {
      Alert.alert("Tarefa já cadastrada");
    }
    setText("");
  }

  function handleRemoveTask(text: string) {
    Alert.alert("Remove", `Deseja remover ${text} tarefa da lista ?`, [
      {
        text: "Sim",
        onPress: () =>
          setTask((prevState) => prevState.filter((task) => task !== text)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const count = task.length;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />

      <View style={styles.box}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma tarefa"
          placeholderTextColor="#808080"
          onChangeText={(e) => setText(e)}
          value={text}
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.3}
          onPress={handleAddTask}
        >
          <Feather style={{ color: "#fff", fontSize: 25 }} name="plus-circle" />
        </TouchableOpacity>
      </View>

      <View style={styles.containerBox}>
        <View style={styles.info}>
          <View style={styles.textTaskCreated}>
            <Text style={{ color: "#4EA8DE", fontFamily: "Inter_700Bold" }}>
              Criados
            </Text>
            <Text style={styles.boxs}>{count}</Text>
          </View>

          <View style={styles.textTaskCompleted}>
            <Text style={{ color: "#8284FA", fontFamily: "Inter_700Bold" }}>
              Concluidos
            </Text>
            <Text style={styles.boxs}>{0}</Text>
          </View>
        </View>

        <FlatList
          data={task}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              text={item}
              onRemove={() => handleRemoveTask(item)}
            />
          )}
          ListEmptyComponent={() => (
            <View style={{ alignItems: "center" }}>
              <Feather name="clipboard" color="#fff" style={{ fontSize: 40 }} />
              <Text style={{ color: "#333", fontSize: 14, marginTop: 15 }}>
                Você ainda não tem tarefas cadastradas Crie tarefas e organize
                seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
