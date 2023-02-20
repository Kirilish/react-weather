import React, { useState } from "react";
import ListTask from "../../components/ListTask/ListTask";

function ListOfTask({ theme }) {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoAdd = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleTodoDelete = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const handleTodoToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="list">
      <ListTask
        todos={todos}
        newTodo={newTodo}
        handleNewTodoChange={handleNewTodoChange}
        handleNewTodoAdd={handleNewTodoAdd}
        handleTodoDelete={handleTodoDelete}
        handleTodoToggle={handleTodoToggle}
        theme={theme}
      />
    </div>
  );
}

export default ListOfTask;
