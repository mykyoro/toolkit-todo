import React from "react";
import { useAppSelector } from "../../../app/hooks";
// import { useSelector } from "react-redux"; //reduxとreactcomponentを接続するもの
import { selectTasks } from "../taskSlice"; //reduxの中のstateを持っているとこ
import TaskItem from "../taskItem/TaskItem";
import styles from "./TaskList.module.scss";

const TaskList: React.FC = () => {
  const tasks = useAppSelector(selectTasks); //reduxの中のstoreのstateであるselectTasksをuseSelectorを使って持ってきてtasksに格納
  return (
    <div className={styles.root}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
