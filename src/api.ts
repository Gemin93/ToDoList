// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {ITask} from "./types";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB0R99ygXogWKbl4LDxB7l8NiOTTL1Dcs",
  authDomain: "todo-karpov.firebaseapp.com",
  projectId: "todo-karpov",
  storageBucket: "todo-karpov.appspot.com",
  messagingSenderId: "954804818294",
  appId: "1:954804818294:web:57723ab0ef299ff856ea57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);

export const todosCollection = `todos`;

//созадние задачи
export const createTodo = async (data: Omit<ITask, 'id'>): Promise<any> => {
  try {
    await addDoc(collection(db, todosCollection), data);
  } catch (error) {
    return  Promise.reject(error)
  }
}

//обновление задачи
export const updateTodo = async (id: string, title: string, completed: boolean): Promise<any> => {
  //запись которую нужно обновить
  const ref = doc(db, todosCollection, id)
  try {
    await updateDoc(ref, {
      title: title,
      competed: completed
    });
  } catch (error) {
    return  Promise.reject(error)
  }
}

//удаление задачи
export const deleteTodo = async (id: string): Promise<any> => {
  //запись которую нужно удалить
  const ref = doc(db, todosCollection, id)
  try {
    await deleteDoc(ref);
  } catch (error) {
    return Promise.reject(error)
  }
}