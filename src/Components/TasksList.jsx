import Task from "./Task";

function TasksList({ tasks, onDeleteTask, onEditTask }) {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task
            editTasks={onEditTask}
            deleteTask={onDeleteTask}
            key={task.id}
            task={task.task}
            id={task.id}
          />
        );
      })}
    </div>
  );
}

export default TasksList;
