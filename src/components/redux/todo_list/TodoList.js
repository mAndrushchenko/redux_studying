import { Grid } from "@material-ui/core";
import { todosMock } from '../../../mock_data/todosMock'
import { TodoItem } from "../todo_item";
export const TodoList = () => {
  const todos = todosMock;

  return (
    <Grid container direction='column' spacing={2}>
      {todos.map((todo, i) => {
        return <Grid item key={i}><TodoItem todo={todo}/></Grid>
      })}
    </Grid>
  )
}
