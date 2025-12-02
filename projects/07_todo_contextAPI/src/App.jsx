import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currentValue) => {
      return [
        ...currentValue,
        {
          name: itemName,
          dueDate: itemDueDate,
        },
      ];
    });
  };

  const handleDeleteItem = (todoItemName) => {
    const updatedTodoItems = todoItems.filter(
      (Todoitem) => Todoitem.name !== todoItemName
    );
    setTodoItems(updatedTodoItems);
  };
  return (
    <TodoItemsContext.Provider value={[]}>
      <div className="todo-container">
        <AppName />
        <div className="container text-center">
          <AddTodo onNewItem={handleNewItem} />
          {<WelcomeMessage todoItems={todoItems} />}
          <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
        </div>
      </div>
    </TodoItemsContext.Provider>
  );
};

export default App;
