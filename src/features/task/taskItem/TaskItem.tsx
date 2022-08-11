import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
import EventNoteIcon from "@mui/icons-material/EventNote";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import { selectTask, handleModalOpen, selectIsModalOpen } from "../taskSlice";
import TaskForm from "../taskForm/TaskForm";
import { Box, Container } from "@mui/material";
import styles from "./TaskItem.module.scss";

interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem: React.FC<PropTypes> = ({ task }) => {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector(selectIsModalOpen);
  const handleOpen = () => {
    dispatch(selectTask(task));
    dispatch(handleModalOpen(true));
  };
  const handleClose = () => dispatch(handleModalOpen(false));
  const { id, title, completed } = task;

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventNoteIcon />
        <div className={styles.title_text}>{title}</div>
      </div>
      <div className={styles.right_item}>
        <Checkbox
          checked={completed}
          onClick={() => console.log(`check ${id}`)}
          className={styles.checkbox}
        />
        <button onClick={handleOpen} className={styles.edit_button}>
          <EditIcon className={styles.icon} />
        </button>
        <button
          onClick={() => console.log(`delete ${id}`)}
          className={styles.delete_button}
        >
          <DeleteIcon className={styles.icon} />
        </button>
      </div>

      <Modal
        open={isModalOpen}
        onClose={handleClose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Container
          sx={{
            bgcolor: "red",
            width: "40vh",
            height: "40vh",
            background: "#ffffff",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ my: "40px" }}>
            <Box sx={{ my: "20px", fontSize: "25px" }}>Edit</Box>
            <TaskForm edit />
          </Box>
        </Container>
      </Modal>
    </div>
  );
};

export default TaskItem;
