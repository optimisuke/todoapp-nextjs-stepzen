import { List } from "@mui/material";
import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import { useMutation, useQuery } from "@apollo/client";
import {
  DeleteTodoDocument,
  GetTodosDocument,
  InsertTodoDocument,
  UpdateTodoDocument,
} from "@/src/gql/graphql";
import { UUID } from "crypto";

type Task = {
  task: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const { data, loading, error } = useQuery(GetTodosDocument);
  const [insertTodo, { data: insertedData, error: insertError }] =
    useMutation(InsertTodoDocument);
  const addTask = (task: string) => {
    insertTodo({ variables: { title: task } });
  };

  const [updateTodo, { data: updatedData, error: updateError }] =
    useMutation(UpdateTodoDocument);
  const toggleTask = (index: string, completed: boolean) => {
    updateTodo({ variables: { id: index, completed: !completed } });
  };

  const [deleteTodo, { data: indeletedData, error: deletedError }] =
    useMutation(DeleteTodoDocument);
  const deleteTask = (index: string) => {
    deleteTodo({ variables: { id: index } });
  };

  return (
    <div>
      <TodoInput addTask={addTask} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <List>
        {data?.todosList?.map((task, index) => (
          <TodoItem
            key={index}
            task={task?.title!}
            completed={task?.completed!}
            toggleTask={() => toggleTask(task?.id!, task?.completed!)}
            deleteTask={() => deleteTask(task?.id!)}
          />
        ))}
      </List>
    </div>
  );
};

export default TodoList;
