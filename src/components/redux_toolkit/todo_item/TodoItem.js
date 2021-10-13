import React from 'react';
import { Box, Paper, Typography, Checkbox, Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../../../store/redux_toolkit/slices/todosSlice";

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()

  const onToggleTodo = () => {
    dispatch(toggleTodo({ id: todo.id }))
  }

  const onDeleteTodo = () => {
    dispatch(deleteTodo({ id: todo.id }))
  }

  return (
    <Paper elevation={3}>
      <Box px={3} py={2} display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Checkbox data-testid="checkbox-complete" onChange={onToggleTodo} color='primary' checked={todo.completed}/>
        </Box>
        <Typography
          variant="body1"
          color={todo.completed ? "textSecondary" : "textPrimary"}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.title}
        </Typography>
        <Button data-testid="delete-button" onClick={onDeleteTodo} style={{ padding: 4, minWidth: 'auto'}}><ClearIcon/></Button>
      </Box>
    </Paper>
  );
};
