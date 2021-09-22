import { todosMock } from "../../../mock_data/todosMock";
import { todoActionTypes } from "../action_types/todoActoionTypes";

const initialState = todosMock;

export const TodoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case todoActionTypes.TODO_ADD_ITEMS:
      return [ ...state, ...payload ];
    case todoActionTypes.TODO_ADD_ITEM:
      return [ ...state, payload ];
    case todoActionTypes.TODO_TOGGLE:
      return state.map(todo => {
          if (todo.id === payload) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
    case todoActionTypes.TODO_REMOVE:
      return state.filter(todo => todo.id !== payload)
    case todoActionTypes.TODO_REMOVE_ALL:
      return [];
    default:
      return state;
  }
};
