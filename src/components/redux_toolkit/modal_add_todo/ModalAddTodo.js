import { Box, Button, Modal, Paper, TextField } from "@material-ui/core";

import ClearIcon from "@material-ui/icons/Clear";

export const ModalAddTodo = ({ isModalOpen, closeModal, onAddTodo }) => (
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
          <TextField autoFocus/>
          <Box height={16}/>
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

