import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./App.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <header className="App-header">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
      </header>
    </div>
  );
}
