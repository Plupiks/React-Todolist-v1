import { useState, useRef } from 'react';
import ReactDom from 'react-dom';
import style from './EditModal.module.css';

function EditModal({ title, closeHandler, changeTitle }) {
  const defaultTitle = useRef(title);
  const [newTitle, setNewTitle] = useState(title);

  function resetDefault() {
    setNewTitle(defaultTitle.current);
  }

  function changeHandler(e) {
    setNewTitle(e.target.value);
  }

  function updateTitle(e) {
    changeTitle(newTitle);
  }

  return ReactDom.createPortal(
    <div className={style.taskmodal}>
      <div className={style.taskmodal__body}>
        <button className={style.taskmodal__close} onClick={closeHandler}>
          <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g data-name="Layer 2">
              <g data-name="close">
                <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
                <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
              </g>
            </g>
          </svg>
        </button>
        <h2 className={style.taskmodal__title}>Write new title</h2>
        <input
          className={style.taskmodal__input}
          onChange={changeHandler}
          type="text"
          value={newTitle}
          placeholder="New task name..."
          autoFocus
        />
        <div className={style.taskmodal__actions}>
          <button className={style.taskmodal__apply} onClick={updateTitle}>
            Save
          </button>
          <button className={style.taskmodal__reset} onClick={resetDefault}>
            Reset
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal'),
  );
}

export default EditModal;
