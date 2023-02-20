import React from "react";

function ListTask({
  handleNewTodoChange,
  handleNewTodoAdd,
  handleTodoDelete,
  handleTodoToggle,
  todos,
  newTodo,
  theme,
}) {
  return (
    <div className={`todo_${theme}`}>
      <div className="todo_title">
        <h1>Список задач</h1>
      </div>
      <div className="todo_card">
        <div className="todo_card_select">
          <div className="card_inp">
            <input
              type="text"
              value={newTodo}
              onChange={handleNewTodoChange}
              placeholder="Новая задача"
            />
          </div>
          <button className="todo_btn" onClick={handleNewTodoAdd}>
            Добавить
          </button>
        </div>
        <ul className="todo_list">
          {todos.map((todo, index) => (
            <li className="todo_item" key={index}>
              <input
                className="todo_item_inp"
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleTodoToggle(index)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button
                className="todo_del"
                onClick={() => handleTodoDelete(index)}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListTask;
