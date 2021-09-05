import { useState } from "react";

import { ModalAddTodo } from "../modal_add_todo";
import { Box, Button, Container } from "@material-ui/core";

import { TodoList } from "../todo_list";

export const HomeRedux = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Container maxWidth="sm">
      <Box my={5}>
        <TodoList/>
      </Box>

      <Box position="fixed" right={16} bottom={16}>
        <Button onClick={openModal} variant="contained" color="primary" style={{ marginRight: 16 }}>Add Todo</Button>
        <Button variant="contained" color="primary" style={{ marginRight: 16 }}>Fetch Todos</Button>
        <Button variant="contained" color="secondary">Delete all Todos</Button>
      </Box>

      <ModalAddTodo isModalOpen={isModalOpen} closeModal={closeModal}/>
    </Container>
  );
};
