import styles from "../styles/Task.module.css";
import { useId, useState } from "react";

function Task({ task, id, deleteTask, editTasks }) {
  const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task);
  const checkboxId = useId();

  const handleEditTask = (evt) => {
    if (evt.key === "Enter") {
      editTasks(id, text);
      setIsEditing(false);
    }
  };

  return (
    <div className={styles.task__item}>
      <div className={styles.checkbox__wrapper_62}>
        <input
          type="checkbox"
          className={styles.check}
          id={checkboxId}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor={checkboxId} className={styles.label}>
          <svg width="43" height="43" viewBox="0 0 90 90">
            <rect
              x="30"
              y="20"
              width="50"
              height="50"
              stroke="purple"
              fill="none"
            />
            <g transform="translate(0,-952.36218)">
              <path
                d="m 13,983 c 33,6 40,26 55,48"
                stroke="purple"
                strokeWidth="3"
                className={styles.path1}
                fill="none"
              />
              <path
                d="M 75,970 C 51,981 34,1014 25,1031"
                stroke="purple"
                strokeWidth="3"
                className={styles.path1}
                fill="none"
              />
            </g>
          </svg>
          {isEditing ? (
            <input
              className={styles.task__item_input}
              value={text}
              onKeyDown={handleEditTask}
              onChange={(evt) => setText(evt.target.value)}
              onBlur={() => {
                setIsEditing(false);
              }}
              autoFocus
            />
          ) : (
            <span
              className={`
            ${styles.task__item_text}
            ${checked ? styles.task__item_text_completed : ""}
            `}
            >
              {task}
            </span>
          )}
        </label>
      </div>

      <div className={styles.task__item_buttons}>
        <button onClick={() => setIsEditing(true)} className={styles.btn__edit}>
          <i className="bi bi-pencil"></i>
        </button>
        <button className={styles.btn__delete} onClick={() => deleteTask(id)}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default Task;
