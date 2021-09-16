import {todosMock} from "../../../mock_data/todosMock";
import {todoActionTypes} from "../action_types/todoActoionTypes";

const initialState = {
    todos: todosMock
};

export const TodoReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case todoActionTypes.TODO_ADD_ITEMS:
            return {
                todos: [...state.todos, ...payload]
            }
        case todoActionTypes.TODO_ADD_ITEM:
            return {
                todos: [...state.todos, payload]
            }
        case todoActionTypes.TODO_TOGGLE:
            const index = state.todos.findIndex(todo => todo.id === payload);
            const newArray = [...state.todos];
            newArray[index].completed = !newArray[index].completed
            return {
                todos: newArray,
            }
        case todoActionTypes.TODO_REMOVE:
            return {
                todos: state.todos.filter(todo => todo.id !== payload)
            }
        case todoActionTypes.TODO_REMOVE_ALL:
            return {
                todos: []
            }
        default:
            return state;
    }
};
