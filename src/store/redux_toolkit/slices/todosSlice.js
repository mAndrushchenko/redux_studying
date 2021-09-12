import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { todosMock } from "../../../mock_data/todosMock";
import { todosToolkitApi } from "../../../api/todosToolkitApi";

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async () => {
    const newTodos = await todosToolkitApi.getTodos();
    return newTodos.map((todo, i)  => ({ ...todo, id: Date.now() + i }))
  }
);

export const getTodoById = createAsyncThunk(
  "todos/getTodoById",
  async ({ id }, { rejectWithValue, getState }) => {
    const newTodo = await todosToolkitApi.getTodoById(id);
    const { todos } = getState();

    if (!newTodo?.id) return rejectWithValue(`Todo with id: ${id} doesn't exist.`);
    if (todos.find(todo => todo.id === newTodo.id)) return rejectWithValue(`Todo with id: ${id} already exist in your list.`);

    return newTodo;
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState: todosMock,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload.todo);
    },

    deleteTodo: (state, action) => state.filter(todo => todo.id !== action.payload.id),

    toggleTodo: (state, action) => {
      state.forEach(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
      });
    },

    deleteAllTodos: () => []
  },
  extraReducers: {
    // Get todos
    [getTodos.pending]: () => {
      console.log("%cGet todos. Pending...", "color: #FFFF33");
    },
    [getTodos.fulfilled]: (state, action) => {
      console.log("%cSuccess", "color: #228B22");
      return [ ...state, ...action.payload.slice(0, 10) ];
    },
    [getTodos.rejected]: () => {
      console.error("Error with request \"Get todos\"");
    },

    // Get todo by id
    [getTodoById.pending]: () => {
      console.log("%cGet todo by id. Pending...", "color: #FFFF33");
    },
    [getTodoById.fulfilled]: (state, action) => {
      console.log("%cSuccess", "color: #228B22");
      state.push(action.payload);
    },
    [getTodoById.rejected]: (state, action) => {
      console.error("Error with request 'Get todo by id'.", action.payload || "");
    }
  }
});

export const {
  addTodo,
  deleteTodo,
  toggleTodo,
  deleteAllTodos,
} = todosSlice.actions;

export const todosSelector = (state) => state.todos;
