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
    console.log("%cGet todo by id. Pending...", "color: #FFFF33");
    try {
        console.log("%cSuccess", "color: #228B22");
        const res = await todosToolkitApi.getTodoById(id);
        dispatch(addTodo(res));
    } catch (err) {
        console.error("Error with request 'Get todo by id'.", err || "");
    }
}

export const getTodos = () => async dispatch => {
    console.log("%cGet todo by id. Pending...", "color: #FFFF33");
    try {
        console.log("%cSuccess", "color: #228B22");
        const res = await todosToolkitApi.getTodos();
        dispatch(addTodos(res.slice(0, 10)))
    } catch (err) {
        console.error("Error with request \"Get todos\"");
    }
}
