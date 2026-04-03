import styles from "../styles/Header.module.css";
import { useState } from "react";

function Header({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    onAddTask(inputValue);
    setInputValue("");
  };
  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>TODO LIST</h1>
      <div className={styles.header__search}>
        <input
          className={styles.header__input}
          type="text"
          value={inputValue}
          onChange={(evt) => setInputValue(evt.target.value)}
          placeholder="Add New Task..."
        />
        <button onClick={handleAdd} className={styles.header__btn_filter}>
          Add
        </button>
        <button className={styles.header__btn_theme}>
          <i className="bi bi-brightness-high" />
        </button>
      </div>
    </div>
  );
}

export default Header;
