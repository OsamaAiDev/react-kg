import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";

const App = () => {
  const todoItems = [
    {
      name: "Go to school",
      dueDate: "12/9/2025",
    },
    {
      name: "Watch Vu Lecture",
      dueDate: "12/9/2025",
    },
    {
      name: "Finish today task",
      dueDate: "11/11/2025",
    },
  ];
  return (
    <div className="todo-container">
      <AppName />
      <div className="container text-center">
        <AddTodo />
        
          <TodoItems todoItems={todoItems} />
        
      </div>
    </div>
  );
};

export default App;
