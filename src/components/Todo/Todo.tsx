import React, {ChangeEvent, FC, useState} from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import './Todo.css'

interface TodoProps {
  id: string;
  title: string;
  complete: boolean;
  handleEdit: (id: string, title: string) => Promise<any>
}

export const Todo: FC<TodoProps> = ({id,title, complete, handleEdit}) => {
  const [newTitle, setNewTitle] = useState(title)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (complete) {
      setNewTitle(title);
    } else {
      title = '';
      setNewTitle(e.currentTarget.value)
    }
  }

  return (
    <div className="todo-container">
        <div className='todo'>
        <input
          type="text"
          className="todo-task"
          value={newTitle}
          onChange={handleChange}
        />
        <div>
          <button className="button-complete">
            <CheckCircleIcon id="i"/>
          </button>
          <button className="button-edit" onClick={() => handleEdit(id, newTitle)}>
            <EditIcon id="i"/>
          </button>
          <button className="button-delete">
            <DeleteIcon id="i"/>
          </button>
        </div>
      </div>
    </div>
  );
}