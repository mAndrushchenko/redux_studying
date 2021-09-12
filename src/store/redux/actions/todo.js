import { todosToolkitApi } from "../../../api/todosToolkitApi";

export const addTodo = todo => ({
    type: 'TODO:ADD_ITEM',
    payload: todo
});

export const toggleTodo = id => ({
    type: 'TODO:TOGGLE',
    payload: id
});

export const deleteAllTodos = () => ({
   type: 'TODO:REMOVE_ALL'
});

export const addTodos = todos => ({
    type: 'TODO:ADD_ITEMS',
    payload: todos
});

export const deleteTodo = id => ({
    type: 'TODO:REMOVE',
    payload: id
});

export const getTodoById = ({ id }) => async dispatch => {
    const res = await todosToolkitApi.getTodoById(id);
    dispatch(addTodo(res));
}

export const getTodos = () => async dispatch => {
    const res = await todosToolkitApi.getTodos();
    dispatch(addTodos(res.slice(0, 10)))
}
