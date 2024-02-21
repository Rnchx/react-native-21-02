import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableOpacity, TextInput, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
	  if (task.trim().length > 0) {
	    setList([
        ...list,
         {
           id: Math.random().toString(),
            value: task,
           },
          ]);
	    setTask("");
	  }
	};

  return (
    <View style={styles.container}>
  <View style={styles.form}>
    <TextInput
      placeholder="Digite uma nova tarefa"
      style={styles.input}
      onChangeText={setTask}
      value={task}
    />
    <TouchableOpacity
      onPress={addTask}
      style={styles.addButton}
    >
      <Text style={styles.textButton}>Adicionar</Text>
    </TouchableOpacity>
  </View>
  <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
  {list.map((task) => (
    <View key={task.id}>
      <Text>{task.value}</Text>
    </View>
  ))}
</ScrollView>
  <StatusBar style="auto" />
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 10,
    width: '75%',
  },
  addButton: {
    backgroundColor: "dodgerblue",
    padding: 10,
    borderRadius: 5,
  },
});
