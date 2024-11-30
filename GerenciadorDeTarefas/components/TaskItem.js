import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TaskItem({ task, onDelete }) {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{task.title}</Text>
      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <Text style={styles.deleteText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
  },
  taskText: {
    fontSize: 16,
  },
  deleteText: {
    color: 'red',
  },
});
