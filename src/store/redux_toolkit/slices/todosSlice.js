import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { todosMock } from "../../../mock_data/todosMock";
import { todosToolkitApi } from "../../../api/todosToolkitApi";

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async () => await todosToolkitApi.getTodos()
);

export const getTodoById = createAsyncThunk(
  "todos/getTodoById",
  async (id) => await todosToolkitApi.getTodoById(id)
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
    [getTodoById.rejected]: () => {
      console.error("Error with request \"Get todo by id\"");
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
