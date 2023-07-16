import React, { useState } from "react";
const TodoList = ({ todos, setTodos }) => {
  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  // const [comple, setConsulted] = useState(false);
  const handleCompleted = (id) => {
    setTodos(
      todos.map((item) =>
        item.id == id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className=" container mt-4 border-top ">
      <div className="w-50 d-flex flex-column  m-auto   ">
        {todos.map((item) => {
          return (
            <div
              key={item.id}
              className="task_card d-flex justify-content-between  align-items-center mt-2 bg-info border border-dark rounded-3 "
            >
              <input
                onClick={() => handleCompleted(item.id)}
                type="checkbox"
                name=""
                id={item.id}
                className="ms-1 c-box"
              />
              <div className="mt-2">
                <p className={item.completed ? "completed" : ""}>{item.text}</p>
              </div>
              <span className=" c-box" onClick={() => handleDelete(item.id)}>
                ❌
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default TodoList;
