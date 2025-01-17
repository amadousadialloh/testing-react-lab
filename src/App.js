import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, input]);
    setInputValue("");
  };

  return (
    <div>
      <label htmlFor="todo">Add a new todo</label>
      <input id="todo" value={input} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      {todos.length > 0 && (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
