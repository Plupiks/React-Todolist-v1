import { useState, useRef } from 'react';
import style from './AddTask.module.css';

const taskcount = localStorage.getItem('taskcount') ? +localStorage.getItem('taskcount') : 0;

function AddTask({ startData, updateData }) {
  const [inputText, setInputText] = useState('');
  let generatedIndex = useRef(taskcount);

  function submitHandler(e) {
    e.preventDefault();
    generatedIndex.current++;
    localStorage.setItem('taskcount', generatedIndex.current);

    const formData = {
      id: generatedIndex.current,
      title: inputText,
    };

    updateData([formData, ...startData]);
    setInputText('');
  }

  return (
    <form className={style.newtask} onSubmit={submitHandler}>
      <div className={style.newtask__body}>
        <input
          className={style.newtask__input}
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          title="Task title"
          placeholder="New task..."
          value={inputText}
          required
          autoFocus
        />
        <button className={style.newtask__submit} type="submit">
          <span>Add</span>
        </button>
      </div>
    </form>
  );
}

export default AddTask;
