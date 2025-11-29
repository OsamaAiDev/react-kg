import { MdDeleteForever } from "react-icons/md";

const TodoItem = ({ todoName, onDeleteClick, todoDate = "5/6/2022" }) => {
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger todo-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDeleteForever /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
