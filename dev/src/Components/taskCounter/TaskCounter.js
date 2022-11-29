import React, { useState } from 'react';
import style from './TaskCounter.module.css';

function TaskCounter({completed, onProgress}) {
  const done = completed.length;
  const progress = onProgress.length;

  console.log(done);
  console.log(progress);

  return <div className={style.taskcounter}>
    <div className={style.taskcounter__counter} id='counter1'>
      <p className={style.taskcounter__title}>Todo done:</p>
      <p className={style.taskcounter__value}>{done}</p>
    </div>

    <div className={style.taskcounter__counter} id='counter2'>
      <p className={style.taskcounter__title}>Todo on progress:</p>
      <p className={style.taskcounter__value}>{progress}</p>
    </div>
  </div>;
}

export default TaskCounter;
