import React, { FC } from 'react';
import {Title} from "../Title/Title";
import {AddTask} from "../AddTask/AddTask";
import {TodoList} from "../TodoList/TodoList";
import {Route, Switch} from "react-router-dom";
import {SignIn} from "../SignIn/SignIn";
import {SignUp} from "../SignUp/SignUp";

export const App: FC = () => {
  return (
    <>
      <Title/>
      <Switch>
        <Route path="/account">
          <div>
            <AddTask/>
            <TodoList/>
          </div>
        </Route>
        <Route path="/">
          <SignIn/>
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
      </Switch>

    </>
  );
};
