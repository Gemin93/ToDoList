import React, {FC, useEffect, useState} from 'react';
import {ITask} from "../../types";
import {auth, db, todosCollection} from "../../api";
import {Todo} from "../Todo/Todo";
import './TodoList.css'
import {query, collection, onSnapshot, where} from "firebase/firestore";


export const TodoList: FC = () => {
  const [todo, setTodo] = useState<ITask[]>([]);
  // const userId = auth.currentUser?.uid;

  let userId: string | undefined = '';

  auth.onAuthStateChanged((user) => {
    userId = user?.uid;
    return userId;
  })

  useEffect(() =>{
    const q = query(collection(db, todosCollection), where('owner', '==', userId));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosList: ITask[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data() as Omit<ITask, 'id'>;
        todosList.push({ ...data, id: doc.id });
      });
      setTodo(todosList)
    })
    return () => unsubscribe();
  },[]);
  return (
    <>
      {todo.length === 0 ?
        <div className="suggest">Может уже стоит придумать задачу?</div>
        : <div className="todo-list">
          {todo.map((item) =>(
            <Todo key={item.id} id={item.id} title={item.title} complete={item.completed} ></Todo>
          ))}
        </div>
      }
    </>
  )
}