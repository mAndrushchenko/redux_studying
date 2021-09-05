const TodoActions = {
    addTodo: todo => ({
        type: 'POLL_LIST:SET_DATA',
        payload: todo
    }),

    toggleTodo: id => ({
        type: 'POLL_LIST:REMOVE_POLL',
        payload: id
    }),

    deleteAllTodos: () => ({
       type: 'TODO:REMOVE_ALL'
    }),

    setTodos: todos => ({
        type: 'TODO:SET_ITEMS',
        payload: todos
    }),

    deleteTodo: id => {
        return {
            type: 'TODO:REMOVE',
            payload: id
        }
    },

    fetchTodos: () => dispatch => {
        // api request
        // success -> dispatch(TodoActions.setTodos(data))
    }
};

export default TodoActions;