import { Box, Button, Modal, Paper, TextField } from "@material-ui/core";

import { useDispatch } from "react-redux";
import ClearIcon from "@material-ui/icons/Clear";

import { addTodo } from "../../../store/redux_toolkit/slices/todosSlice";

export const ModalAddTodo = ({ isModalOpen, closeModal }) => {
  const dispatch = useDispatch();


  const onAddTodo = (e) => {
    e.preventDefault();
    const title  = e.target[0].value

    const todo = {
      title,
      id: Date.now(),
      completed: false
    }

    dispatch(addTodo({ todo }));
    closeModal();
  };

  return (
    <Modal
      open={isModalOpen}
      disablePortal
      disableAutoFocus
      disableEnforceFocus
      onClose={closeModal}
      style={{ display: "flex", alignItems: "center", justifyContent: "center", border: "none" }}
    >
      <Paper elevation={4}>
        <form onSubmit={onAddTodo}>
          <Box position="relative" py={2} px={5} display="flex" flexDirection="column">
            <Box height={16}/>
            <TextField autoFocus/>
            <Button type="submit" variant="contained" color="primary">Add todo</Button>

            <Button onClick={closeModal}
                    style={{ padding: 4, minWidth: "auto", position: "absolute", right: 8, top: 8 }}>
              <ClearIcon/>
            </Button>
          </Box>
        </form>
      </Paper>
    </Modal>
  );
};
