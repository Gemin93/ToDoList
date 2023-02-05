import React, { FC } from 'react';
import {Title} from "../Title/Title";
import {AddTask} from "../AddTask/AddTask";
import {TodoList} from "../TodoList/TodoList";

export const App: FC = () => {
  return (
    <>
      <div>
        <Title/>
      </div>
      <div>
        <AddTask/>
      </div>
      <TodoList/>
    </>
  );
};
