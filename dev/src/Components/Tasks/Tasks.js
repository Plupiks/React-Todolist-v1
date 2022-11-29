import { useState } from 'react';
import Task from './Task';
import style from './Tasks.module.css';

function Tasks({ startData, updateData, completedTasks, updateCompletedTasks }) {
  return (
    <div className={style.tasks}>
      {startData.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            startData={startData}
            updateData={updateData}
            completedTasks={completedTasks}
            updateCompletedTasks={updateCompletedTasks}
          />
        );
      })}
    </div>
  );
}

export default Tasks;
