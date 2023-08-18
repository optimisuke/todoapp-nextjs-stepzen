import { Typography, Container } from "@mui/material";
import React from "react";
import TodoList from "../components/TodoList";

const IndexPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        ToDo List
      </Typography>
      <TodoList />
    </Container>
  );
};

export default IndexPage;
