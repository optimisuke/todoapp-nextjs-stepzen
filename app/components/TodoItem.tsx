import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

type TodoItemProps = {
  task: string;
  completed: boolean;
  toggleTask: () => void;
  deleteTask: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  completed,
  toggleTask,
  deleteTask,
}) => {
  return (
    <ListItem>
      <IconButton edge="start" color="inherit" onClick={toggleTask}>
        {completed ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon />}
      </IconButton>
      <ListItemText
        primary={task}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" color="inherit" onClick={deleteTask}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
