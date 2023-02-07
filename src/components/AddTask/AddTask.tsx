import React, {ChangeEvent, FormEvent, useState, useEffect} from "react";
import './AddTask.css';
import {ITask} from "../../types";
import {createTodo} from "../../api";
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut} from 'firebase/auth';
import { auth } from '../../api';
import {useHistory} from 'react-router-dom';

export const AddTask = () => {
  const [task, setTask] = useState<Omit<ITask, 'id'>>({
    title: '',
    completed: false,
    owner: '',
  });

  //редиректить на страницу входа если пользователь не аутентифицировн
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (!user){
        history.push('/')
      }
    })
  },[])

  //выход из аккаунта по нажатию на кнопку
  const history = useHistory();
  const handleLogout = () => {
    signOut(auth).then(() => history.push('/'))
      .catch((error) => console.log(error.message))
  }

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const value = input.value;

    setTask({
      title: value,
      completed: false,
      owner: auth.currentUser?.uid
    })
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (task.title === ''){
      alert('Задача не может буть пустой');
      return
    }

    await createTodo(task);
    setTask({
      title: '',
      completed: false,
      owner: '',
    })
  }

  return (
    <>
      <div className="user-info">
        <div className="user-panel">
          <p>выполнен вход: {auth.currentUser?.email} </p>
          <LogoutIcon className="button-logout" onClick={handleLogout} />
        </div>
      </div>

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
    </form>
    </>

  )
}