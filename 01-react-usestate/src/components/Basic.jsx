import { useState } from "react";

const Basic = () => {
  const [color, setColor] = useState("red");

  // Array warna yang tersedia
  const colors = ["red", "blue", "green", "yellow", "purple"];

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-xl font-bold">Color: {color}</h1>

      <div
        className="w-24 h-24 rounded-md"
        style={{ backgroundColor: color }}
      ></div>

      <div className="flex space-x-2">
        {colors.map((col) => (
          <button
            key={col}
            className="px-4 py-2 rounded-md text-white font-medium"
            style={{ backgroundColor: col }}
            onClick={() => setColor(col)}
          >
            {col.charAt(0).toUpperCase() + col.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Basic;
