import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "./slices/todosSlice";

export const toolkitStore = configureStore({
  reducer: {
    todos: todosSlice.reducer
  }
})
