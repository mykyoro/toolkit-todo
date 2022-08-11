import React from "react";
import { createTask, handleModalOpen } from "../taskSlice";
import { useDispatch } from "react-redux";
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
  const { register, handleSubmit, reset, control } = useForm<Inputs>();
  const handleCreate: SubmitHandler<Inputs> = (data: Inputs) => {
    dispatch(createTask(data.taskTitle));
    reset();
  };

  const hadleEdit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <Box
      component="form"
      onSubmit={edit ? handleSubmit(hadleEdit) : handleSubmit(handleCreate)}
    >
      <Controller
        name="taskTitle"
        control={control}
        defaultValue={edit ? "defaultValue" : ""}
        render={({}) => (
          <TextField
            id="outlined-basic"
            label={edit ? "Edit Task" : "New Task"}
            variant="outlined"
            {...register("taskTitle")}
            sx={{ mb: 2, width: "100%" }}
          />
        )}
      />
      {edit ? (
        <Stack>
          <Button variant="contained" sx={{ mb: 2 }}>
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
