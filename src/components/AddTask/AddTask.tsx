import React, {ChangeEvent, FormEvent, useState} from "react";
import './AddTask.css';
import {ITask} from "../../types";
import {createTodo} from "../../api";

export const AddTask = () => {
  const [task, setTask] = useState<Omit<ITask, 'id'>>({
    title: '',
    completed: false,
  });

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const value = input.value;

    setTask({
      title: value,
      completed: false
    })
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await createTodo(task);
    setTask({
      title: '',
      completed: false
    })
  }



  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="input-container">
        <input
          className="form-input"
          type="text"
          value={task.title}
          onChange={onChangeInput}
          placeholder="Добавить задание..."/>
      </div>
      <div className="button-container">
        <button type="submit" className="form-button">Добавить задачу</button>
      </div>
    </form>)
}