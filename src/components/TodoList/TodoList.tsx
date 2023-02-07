import React, {FC, useEffect, useState} from 'react';
import {ITask} from "../../types";
import {auth, db } from "../../api";
import {Todo} from "../Todo/Todo";
import './TodoList.css'
import {query, collection, onSnapshot} from "firebase/firestore";

const idUser = auth.currentUser?.uid;
console.log(idUser);

export const TodoList: FC = () => {
  const [todo, setTodo] = useState<ITask[]>([]);


  const todosCollection = `todos_${idUser}`

  useEffect(() =>{
    const q = query(collection(db, todosCollection));
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
      <div className="todo-list">
        {todo.map((item) =>(
          <Todo key={item.id} id={item.id} title={item.title} complete={item.completed} ></Todo>
        ))}
      </div>
    </>
  )
}