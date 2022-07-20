import React from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EventNoteIcon from "@mui/icons-material/EventNote";
import styles from "./TaskItem.module.scss";

interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem: React.FC<PropTypes> = ({ task }) => {
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
        <button
          onClick={() => console.log(`edit ${id}`)}
          className={styles.edit_button}
        >
          <EditIcon className={styles.icon} />
        </button>
        <button
          onClick={() => console.log(`delete ${id}`)}
          className={styles.delete_button}
        >
          <DeleteIcon className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
