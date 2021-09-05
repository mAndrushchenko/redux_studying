const initialState = {
    todos: []
};

export const TodoReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'TODO:SET_ITEMS':
            return {
                todos: payload
            }
        case 'TODO:ADD_ITEM':
            return {
                todos: [...state.todos, payload]
            }
        case 'TODO:TOGGLE':
            const index = state.todos.findIndex(todo => todo.id !== payload);
            const newArray = [...state.todos];
            newArray[index].completed = !newArray[index].completed
            return {
                todos: newArray,
            }
        case 'TODO:REMOVE':
            return {
                todos: state.todos.filter(todo => todo.id !== payload)
            }
        case 'TODO:REMOVE_ALL':
            return {
                todos: []
            }
        default:
            return state;
    }
};
