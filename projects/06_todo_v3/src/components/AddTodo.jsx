import { useState } from "react";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const handleTodoName = (e) => {
    setTodoName(e.target.value);
  };
  const handleTodoDate = (e) => {
    setTodoDate(e.target.value);
  };
  const handleAddBtnClick = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            onChange={handleTodoName}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleTodoDate} value={todoDate} />
        </div>
        <div className="col-2">
          <button
            onClick={handleAddBtnClick}
            type="button"
            className="btn btn-success todo-button"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
