import { Grid } from "@material-ui/core";
import { TodoItem } from "../todo_item";
import { useSelector } from "react-redux";

import { todosSelector } from "../../../store/redux_toolkit/slices/todosSlice";

export const TodoList = () => {
  const todos = useSelector(todosSelector);

  return (
    <Grid container direction='column' spacing={2}>
      {todos.map((todo, i) => {
        return <Grid item key={i}><TodoItem todo={todo}/></Grid>
      })}
    </Grid>
  )
}
