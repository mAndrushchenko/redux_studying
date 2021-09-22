import { useState } from "react";

import { useDispatch } from "react-redux";
import { Box, Button, Container, Input } from "@material-ui/core";

import { TodoList } from "../todo_list";
import { ModalAddTodo } from "../modal_add_todo";
import { addTodo, deleteAllTodos, getTodoById, getTodos } from "../../../store/redux/actions/todo";

export const HomeRedux = () => {
  const dispatch = useDispatch();
  const [ reqTodoId, setReqTodoId ] = useState(1);
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
    dispatch(getTodos());
  };

  const onGetTodoById = () => {
    dispatch(getTodoById({ id: reqTodoId }));
  };

  const onChangeReqTodoId = (e) => {
    setReqTodoId(e.target.value);
  };

  const onAddTodo = (e) => {
    e.preventDefault();
    const title = e.target[0].value;

    const todo = {
      title,
      id: Date.now(),
      completed: false
    };

    dispatch(addTodo(todo));
    closeModal();
  };

  return (
    <Container maxWidth="sm">
      <Box my={5}>
        <TodoList/>
      </Box>

      <Box position="fixed" right={16} bottom={16}>
        <Button onClick={openModal} variant="contained" color="primary" style={{ marginRight: 16 }}>Add Todo</Button>
        <Button onClick={onGetTodos} variant="contained" color="primary" style={{ marginRight: 16 }}>Get Todos</Button>
        <Button onClick={onGetTodoById} variant="contained" color="primary" style={{ marginRight: 8 }}>Get todo by
          id</Button>
        <Input onChange={onChangeReqTodoId} value={reqTodoId} variant="filled"
               style={{ width: 50, backgroundColor: "#fff", marginRight: 16, borderRadius: 4, padding: "2px 8px" }}/>
        <Button onClick={onDeleteAllTodos} variant="contained" color="secondary">Delete all Todos</Button>
      </Box>
      <ModalAddTodo isModalOpen={isModalOpen} closeModal={closeModal} onAddTodo={onAddTodo}/>
    </Container>
  );
};
