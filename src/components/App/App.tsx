import React, { FC } from 'react';
import {Title} from "../Title/Title";
import {AddTask} from "../AddTask/AddTask";
import {TodoList} from "../TodoList/TodoList";
import {Route, Switch} from "react-router-dom";
import {SignIn} from "../SignIn/SignIn";

export const App: FC = () => {
  return (
    <>

      <Switch>
        <Route path="/account">
          <div>
            <Title/>
            <AddTask/>
            <TodoList/>
          </div>
        </Route>
        <Route path="/">
          <SignIn/>
        </Route>
      </Switch>

    </>
  );
};
