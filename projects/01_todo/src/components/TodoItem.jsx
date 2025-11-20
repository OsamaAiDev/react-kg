import React from "react";

const TodoItem = () => {
  let todoName = "Go to college";
  let todoDate = "5/6/2022";
  return (
    <div className="container">
      <div class="row todo-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" className="btn btn-danger todo-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
