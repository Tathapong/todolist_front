import Header from "../components/header/Header";
import TodoInput from "../components/todo-list/TodoInput";
import Filter from "../components/filter/Filter";
import PageLimit from "../components/page-limit/PageLimit";
import TodoList from "../components/todo-list/TodoList";
import Pagination from "../components/pagination/Pagination";
import { TodoContextProvider } from "../contexts/TodoContext";

function TodolistPage() {
  return (
    <TodoContextProvider>
      <div className="container max-w-xs w-50 pt-5">
        <Header />
        <TodoInput />
        <Filter />
        <PageLimit />
        <TodoList />
        <Pagination />
      </div>
    </TodoContextProvider>
  );
}

export default TodolistPage;
