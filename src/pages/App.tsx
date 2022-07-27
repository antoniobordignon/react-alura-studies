import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import style from './App.module.scss';
import Timer from '../components/timer';
import { ITask } from '../types/task';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(taskSelected: ITask) { 
    setSelected(taskSelected)
  }
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
      tasks={tasks} 
      selectTask={selectTask} 
      />
      <Timer />
    </div>
  );
}

export default App;