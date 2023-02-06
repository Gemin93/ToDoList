import React, {FC, useEffect, useState} from 'react';
import {ITask} from "../../types";
import {getTodos} from "../../api";
import {Todo} from "../Todo/Todo";
import './TodoList.css'

export const TodoList: FC = () => {
  const [todo, setTodo] = useState<ITask[]>([]);

  useEffect(() => {
    (async () => {
      const listTodo = await getTodos();
      setTodo(listTodo);
    })();
  }, [todo])
  return (
    <>
      <div className="todo-list">
        {todo.map((item) =>(
          <Todo key={item.id} id={item.id} title={item.title} complete={item.completed} ></Todo>
        ))}
      </div>

    </>
  )
}