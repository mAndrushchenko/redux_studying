import {useSelector} from "react-redux";
import { Grid } from "@material-ui/core";

import { TodoItem } from "../todo_item";

export const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);

  return (
    <Grid container direction='column' spacing={2}>
      {todos.map((todo, i) => {
        return <Grid item key={i}><TodoItem todo={todo}/></Grid>
      })}
    </Grid>
  )
}
