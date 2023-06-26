import {TodoWrapper} from "./TodoWrapper";
import React from "react";
import "./TodoStyles.scss";



function TodoApp() {
    return (
        <div className="todo-app">
        <TodoWrapper />
        </div>
  );
}

export default TodoApp;