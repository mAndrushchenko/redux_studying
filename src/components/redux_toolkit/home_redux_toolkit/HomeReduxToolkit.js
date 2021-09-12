import { useState } from "react";

import { ModalAddTodo } from "../modal_add_todo";
import { Box, Button, Container } from "@material-ui/core";

import { TodoList } from "../todo_list";
import { useDispatch } from "react-redux";
import { deleteAllTodos, getTodos, getTodoById } from "../../../store/redux_toolkit/slices/todosSlice";

export const HomeReduxToolkit = () => {
  const dispatch = useDispatch();

  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onDeleteAllTodos = () => {
    dispatch(deleteAllTodos());
  };

  const onGetTodos = () => {
    dispatch(getTodos())
  }

  const onGetTodoById = () => {
    dispatch(getTodoById(12))
  }

  return (
    <Container maxWidth="sm">
      <Box my={5}>
        <TodoList/>
      </Box>

      <Box position="fixed" right={16} bottom={16}>
        <Button onClick={openModal} variant="contained" color="primary" style={{ marginRight: 16 }}>Add Todo</Button>
        <Button onClick={onGetTodos} variant="contained" color="primary" style={{ marginRight: 16 }}>Get Todos</Button>
        <Button onClick={onGetTodoById} variant="contained" color="primary" style={{ marginRight: 16 }}>Get todo by id</Button>
        <Button onClick={onDeleteAllTodos} variant="contained" color="secondary">Delete all Todos</Button>
      </Box>

      <ModalAddTodo isModalOpen={isModalOpen} closeModal={closeModal}/>
    </Container>
  );
};
