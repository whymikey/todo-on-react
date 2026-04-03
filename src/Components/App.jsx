import { useState } from "react";
import Header from "./Header";
import TasksList from "./TasksList";

import "../styles/App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Work",
    },
    {
      id: 2,
      task: "Walk",
    },
    {
      id: 3,
      task: "GYM",
    },
  ]);

  const addTasks = (newTaskText) => {
    if (!newTaskText.trim()) return;
    const newTask = { id: Date.now(), task: newTaskText };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTasks = (id, newTaskText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, task: newTaskText } : task,
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <Header onAddTask={addTasks} />
      <TasksList
        onDeleteTask={deleteTask}
        tasks={tasks}
        onEditTask={editTasks}
      />
    </div>
  );
}

export default App;
