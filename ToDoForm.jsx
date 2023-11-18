// ToDoForm.jsx

import React from 'react';
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

function ToDoForm() {
function ToDoForm({addTask}) {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = () => {
      addTask(taskText);
      setTaskText(''); // Clear the input field after adding the task
    };

    return (
        <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Add a new task..." />
        <Button title="Add" />
        </View>
        <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={setTaskText}
          value={taskText}
        />
        <Button title="Add" onPress={handleSubmit} />
      </View>
    );
}