import React, {FC} from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import './Todo.css'

interface TodoProps {
  title: string;
}

export const Todo: FC<TodoProps> = ({title}) => {
  return (
    <div className="todo-container">
        <div className='todo'>
        <input type="text" className="todo-task" value={title}/>
        <div>
          <button className="button-complete">
            <CheckCircleIcon id="i"/>
          </button>
          <button className="button-edit">
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