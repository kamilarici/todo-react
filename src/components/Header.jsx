import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Header = ({ setTodos, todos }) => {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      text: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTask("");
  };

  return (
    <div className="container text-center">
      <h1 className="text-danger mt-5">Todo App</h1>
      <div className="row justify-content-center mt-5">
        <form onSubmit={handleSubmit} action="#" className="d-flex w-50 ">
          <input
            onChange={(e) => setTask(e.target.value)}
            type="text"
            className="form-control"
            value={task}
          />
          <button
            disabled={!task.trim()}
            type="submit"
            className="btn btn-primary ms-2"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default Header;
