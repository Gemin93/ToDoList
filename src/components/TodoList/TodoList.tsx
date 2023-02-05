import React, {FC, useEffect, useState} from 'react';
import {ITask} from "../../types";
import {getTodos} from "../../api";
import {Todo} from "../Todo/Todo";

export const TodoList: FC = () => {
  const [todo, setTodo] = useState<ITask[]>([]);

  useEffect(() => {
    (async () => {
      const todo = await getTodos();
      setTodo(todo);
    })();
  }, [])
  return (
    <>
      {todo.map((item) =>(
        <Todo key={item.id} title={item.title}></Todo>
      ))}
    </>
  )
}