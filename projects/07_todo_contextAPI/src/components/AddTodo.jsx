import { useState, useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
const AddTodo = ({ onNewItem }) => {
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");
  const noOfUpdates = useRef(0);
  const todoNameElement = useRef();
  const dueDateElement = useRef();
  // const handleTodoName = (e) => {
  //   setTodoName(e.target.value);
  //   noOfUpdates.current += 1;
  // };
  // const handleTodoDate = (e) => {
  //   setTodoDate(e.target.value);
  //   console.log(`No of updates are ${noOfUpdates.current}`);
  // };
  const handleAddBtnClick = (e) => {
    e.preventDefault();
    // onNewItem(todoName, todoDate);
    onNewItem(todoNameElement.current.value, dueDateElement.current.value);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    // setTodoName("");
    // setTodoDate("");
  };
  return (
    <div className="container">
      <form onSubmit={handleAddBtnClick} className="row todo-row">
        <div className="col-6">
          {/* <input
            type="text"
            placeholder="Enter Todo Here"
            onChange={handleTodoName}
            value={todoName}
          /> */}
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          {/* <input
            type="date"
            onChange={handleTodoDate}
            value={todoDate}
          /> */}
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success todo-button">
            Add <IoIosAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
