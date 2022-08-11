import React from "react";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import Header from "./components/header/Header";
import TaskForm from "./features/task/taskForm/TaskForm";
import styles from "./App.module.scss";
import TaskList from "./features/task/taskList/TaskList";

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box className={styles.root}>
        <Box className={styles.wrapper}>
          <Header />
          <TaskForm />
          <TaskList />
        </Box>
      </Box>
    </>
  );
};
export default App;
