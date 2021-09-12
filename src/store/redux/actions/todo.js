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

export const getTodoById = ({ id }) => dispatch => {

}

export const getTodos = () => dispatch => {
    // api request
    // success -> dispatch(addTodos(data))
}
