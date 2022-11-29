import { useState, useEffect } from 'react';
import './App.css';
import './fonts.css';

import AddTask from './Components/newTask/AddTask';
import TaskCounter from './Components/taskCounter/TaskCounter';
import Tasks from './Components/Tasks/Tasks';

const storedTasks = localStorage.getItem('tasklist') ? JSON.parse(localStorage.getItem('tasklist')) : [];

const completedTasklist = localStorage.getItem('completed') ? JSON.parse(localStorage.getItem('completed')) : [];

function App() {
  const [tasksList, setTasksList] = useState(storedTasks);
  const [completedTasks, updateCompletedTasks] = useState(completedTasklist);

  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(tasksList))
  },[tasksList])

  useEffect(() => {
    localStorage.setItem('completed', JSON.stringify(completedTasks))
  },[completedTasks])
  

  return (
    <div className="todolist">
      <h1 className="todolist__title">To do list</h1>
      <AddTask startData={tasksList} updateData={setTasksList} />
      <TaskCounter completed={completedTasks} onProgress={tasksList} />
      <Tasks
        startData={tasksList}
        updateData={setTasksList}
        updateCompletedTasks={updateCompletedTasks}
        completedTasks={completedTasks}
      />
    </div>
  );
}

export default App;
