import React from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./TaskFomr.module.scss";

type Inputs = {
  taskTitle: string;
};

const TaskForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    console.log(data);
    reset();
  };
  return (
    <Box component="form">
      <TextField
        onSubmit={handleSubmit(() => handleCreate)}
        id="outlined-basic"
        label="New Task"
        variant="outlined"
        {...register("taskTitle")}
        className={styles.text_field}
      />
    </Box>
  );
};

export default TaskForm;
