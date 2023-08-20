import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <div className="main">
      <div className="new">
        <h3>Add a TODO</h3>
        <input
          className="intBox"
          type="text"
          placeholder="Enter your todo here"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="submitBtn" onClick={handleAddTodo}>
          Submit
        </button>
      </div>
      <div className="todos">
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          TODO's
        </h3>
        <div>
          {todos.map((todo, index) => (
            <li
              key={index}
              style={{
                display: "flex",
              }}
            >
              <div className="todo">
                <input
                  type="checkbox"
                  checked={todo.checked}
                  onChange={() => handleToggleTodo(index)}
                />
                <span
                  className="txt"
                  style={{
                    textDecoration: todo.checked ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
                <div className="btns">
                  <button type="submit"
                    className="btn1"
                    onClick={() => handleDeleteTodo(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
