import React from "react";
import {
  createTask,
  editTask,
  handleModalOpen,
  selectSelectedTask,
} from "../taskSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Stack } from "@mui/material";

type Inputs = {
  taskTitle: string;
};

type PropTypes = {
  edit?: boolean;
};

const TaskForm: React.FC<PropTypes> = ({ edit }) => {
  const dispatch = useDispatch();
  const selectedTask = useSelector(selectSelectedTask);
  const { register, handleSubmit, reset, control } = useForm<Inputs>();
  const handleCreate: SubmitHandler<Inputs> = (data: Inputs) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };

  const handleEdit = (data: Inputs) => {
    const sendData = { ...selectedTask, title: data.taskTitle };
    dispatch(editTask(sendData));
    dispatch(handleModalOpen(false));
  };

  return (
    <Box
      component="form"
      onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(handleCreate)}
    >
      <Controller
        name="taskTitle"
        control={control}
        render={({}) => (
          <TextField
            id="outlined-basic"
            defaultValue={edit ? selectedTask : ""}
            label={edit ? "Edit Task" : "New Task"}
            variant="outlined"
            {...register("taskTitle")}
            sx={{ mb: 2, width: "100%" }}
          />
        )}
      />
      {edit ? (
        <Stack>
          <Button
            variant="contained"
            sx={{ mb: 2 }}
            onClick={handleSubmit(handleEdit)}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            onClick={() => dispatch(handleModalOpen(false))}
          >
            Cancel
          </Button>
        </Stack>
      ) : null}
    </Box>
  );
};

export default TaskForm;
