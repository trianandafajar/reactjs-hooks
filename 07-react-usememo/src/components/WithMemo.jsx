import { useMemo, useState, useCallback } from "react";

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const WithMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, "New Todo"]);
  }, []);

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <hr />

      <div>
        <h3>Count: {count}</h3>
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation: {calculation}</h2>
      </div>
    </div>
  );
};

export default WithMemo;
