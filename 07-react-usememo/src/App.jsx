import { useState } from "react";
import WithMemo from "./components/WithMemo.jsx";
import WithoutMemo from "./components/WithoutMemo.jsx";

function App() {
  const [showMemo, setShowMemo] = useState(false);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>React Memoization Demo</h1>
      <button
        onClick={() => setShowMemo((prev) => !prev)}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      >
        Toggle to {showMemo ? "WithoutMemo" : "WithMemo"}
      </button>

      {showMemo ? <WithMemo /> : <WithoutMemo />}
    </div>
  );
}

export default App;
