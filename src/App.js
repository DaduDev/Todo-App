import React from "react";
import "./App.css";
import Todo from "./Todo";

const App = () => {
  return (
    <div className="main">
      <h1>TODO-LIST</h1>
      <div>
        <Todo />
      </div>
    </div>
  );
};

export default App;
