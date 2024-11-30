import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { db } from './firebaseConfig';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState<{ id: string; title: string }[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const querySnapshot = await getDocs(collection(db, 'tasks'));
      const tasksList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as { id: string; title: string }[];
      setTasks(tasksList);
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (taskTitle: string) => {
    const docRef = await addDoc(collection(db, 'tasks'), { title: taskTitle });
    setTasks((prevTasks) => [...prevTasks, { id: docRef.id, title: taskTitle }]);
  };

  const handleDeleteTask = async (taskId: string) => {
    await deleteDoc(doc(db, 'tasks', taskId));
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciador de Tarefas</Text>
      <TaskInput onAddTask={handleAddTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onDelete={handleDeleteTask} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24, // Tamanho do título
    fontWeight: 'bold', // Negrito
    textAlign: 'center', // Centralizado
    marginBottom: 20, // Espaçamento abaixo do título
  },
});
