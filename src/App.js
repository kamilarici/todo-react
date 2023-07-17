import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
const todolist = [
  {
    id: 1,
    text: "ödev tw10-2",
    completed: false,
  },
  {
    id: 2,
    text: "useeffect kullanımı",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || todolist
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App text-center ">
      <Header setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
export default App;
