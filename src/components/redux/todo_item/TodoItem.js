import { Box, Paper, Typography, Checkbox, Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

export const TodoItem = ({ todo }) => {
  return (
    <Paper elevation={3}>
      <Box px={3} py={2} display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Checkbox color='primary' checked={todo.completed}/>
        </Box>
        <Typography
          variant="body1"
          color={todo.completed ? "textSecondary" : "textPrimary"}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.title}
        </Typography>
        <Button style={{ padding: 4, minWidth: 'auto'}}><ClearIcon/></Button>
      </Box>
    </Paper>
  );
};
