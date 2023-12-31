import React, {ChangeEvent, FC, useState} from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {updateTodo, deleteTodo} from "../../api";
import './Todo.css'

interface TodoProps {
  id: string;
  title: string;
  complete: boolean;
}

export const Todo: FC<TodoProps> = ({id,title, complete}) => {
  const [newTitle, setNewTitle] = useState(title);
  const [done, setDone] = useState(false);
  const [onDelete, setOnDelete] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (complete) {
      setNewTitle(title);
    } else {
      title = '';
      setNewTitle(e.currentTarget.value)
    }
  }

  const completeTodo = (id: string) => {
    setDone(!complete);
    setTimeout(() => deleteTodo(id), 2000)
  }

  const todoDelete = (id: string) => {
    setOnDelete(!onDelete);
    setTimeout(() => deleteTodo(id), 1000)
  }

  return (
    <div className="todo-container">
        <div className={`todo ${done ? 'todo-done' : ''} ${onDelete ? 'todo-delete': ''}`}>
        <input
          type="text"
          className="todo-task"
          value={newTitle}
          onChange={handleChange}
        />
        <div>
          <button className="button-complete" onClick={() => completeTodo(id)}>
            <CheckCircleIcon id="i"/>
          </button>
          <button className="button-edit" onClick={() => updateTodo(id, newTitle, done)}>
            <EditIcon id="i"/>
          </button>
          <button className="button-delete" onClick={() => todoDelete(id)}>
            <DeleteIcon id="i"/>
          </button>
        </div>
      </div>
    </div>
  );
}