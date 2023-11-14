import React from 'react';
import {SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() { <SafeAreaView>
  <ToDoList />
function App() {  const [tasks, setTasks] = useState([
  'Do laundry',
  'Go to gym',
  'Walk dog'
]);
<SafeAreaView>
<ToDoList tasks={tasks} />
  <ToDoForm />
</SafeAreaView>
;