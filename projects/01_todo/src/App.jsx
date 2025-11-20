import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";

const App = () => {
  return (
    <div className="todo-container">
      <AppName />
      <div class="container text-center">
        <AddTodo />
        <div className="items-container">
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    </div>
  );
};

export default App;
