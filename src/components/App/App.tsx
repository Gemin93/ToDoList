import React, { FC } from 'react';
import {Title} from "../Title/Title";
import {AddTask} from "../AddTask/AddTask";
import {Todo} from "../Todo/Todo";

export const App: FC = () => {
  return (
    <>
      <div>
        <Title/>
      </div>
      <div>
        <AddTask/>
      </div>
      <div>
        <Todo/>
        <Todo/>
        <Todo/>
      </div>
    </>
  );
};
