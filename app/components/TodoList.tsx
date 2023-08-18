import { List } from "@mui/material";
import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

type Task = {
  task: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, { task, completed: false }]);
  };

  const toggleTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <TodoInput addTask={addTask} />
      <List>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task.task}
            completed={task.completed}
            toggleTask={() => toggleTask(index)}
            deleteTask={() => deleteTask(index)}
          />
        ))}
      </List>
    </div>
  );
};

export default TodoList;
