import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added ${itemName} Due: ${itemDueDate}`);
    setTodoItems([
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    console.log(`Item Deleted: ${todoItemName}`);
    const updatedTodoItems = todoItems.filter(
      (Todoitem) => Todoitem.name !== todoItemName
    );
    setTodoItems(updatedTodoItems);
  };
  return (
    <div className="todo-container">
      <AppName />
      <div className="container text-center">
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </div>
    </div>
  );
};

export default App;
