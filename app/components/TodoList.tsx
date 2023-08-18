import { List } from "@mui/material";
import React from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import { useMutation, useQuery } from "@apollo/client";
import {
  DeleteTodoDocument,
  GetTodosDocument,
  InsertTodoDocument,
  UpdateTodoDocument,
} from "@/src/gql/graphql";

const TodoList: React.FC = () => {
  const { data, loading, error } = useQuery(GetTodosDocument);

  const [insertTodo] = useMutation(InsertTodoDocument, {
    update(cache, { data }) {
      const existingData = cache.readQuery({ query: GetTodosDocument });
      cache.writeQuery({
        query: GetTodosDocument,
        data: {
          todosList: [...existingData?.todosList!, data?.insertTodos!],
        },
      });
    },
  });
  const addTask = (task: string) => {
    insertTodo({ variables: { title: task } });
  };

  const [updateTodo] = useMutation(UpdateTodoDocument, {
    update(cache, { data }) {
      const existingData = cache.readQuery({ query: GetTodosDocument });
      const updatedTodos = existingData?.todosList?.map((todo) =>
        todo?.id === data?.updateTodos?.id ? data?.updateTodos! : todo
      );
      cache.writeQuery({
        query: GetTodosDocument,
        data: { todosList: updatedTodos },
      });
    },
  });
  const toggleTask = (index: string, completed: boolean) => {
    updateTodo({ variables: { id: index, completed: !completed } });
  };

  const [deleteTodo] = useMutation(DeleteTodoDocument, {
    update(cache, { data }) {
      const existingData = cache.readQuery({ query: GetTodosDocument });
      const updatedTodos = existingData?.todosList?.filter(
        (todo) => todo?.id !== data?.deleteTodos?.id
      );
      cache.writeQuery({
        query: GetTodosDocument,
        data: { todosList: updatedTodos },
      });
    },
  });
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
