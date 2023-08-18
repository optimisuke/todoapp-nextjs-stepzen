import { TextField, Button, Box } from "@mui/material";
import React, { useState } from "react";

type TodoInputProps = {
  addTask: (task: string) => void;
};

const TodoInput: React.FC<TodoInputProps> = ({ addTask }) => {
  const [task, setTask] = useState("");

  const submitTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (task === "") return;
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={submitTask}>
      <Box display="flex" justifyContent="center" gap="10px" p={2}>
        <TextField
          label="New task"
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </Box>
    </form>
  );
};

export default TodoInput;
