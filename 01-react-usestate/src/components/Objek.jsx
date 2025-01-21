import { useState } from "react";

const Objek = () => {
  const [car, setCar] = useState({
    brand: "BMW",
    model: "X5",
    year: 2022,
    color: "red",
  });
  const updateColor = () => {
    setCar((prevState) => {
      if (prevState.color === "blue") {
        return { ...prevState, color: "red" };
      }
      return { ...prevState, color: "blue" };
    });
  };
  return (
    <>
      <h1>My {car.brand}</h1>
      <div
        style={{
          marginBottom: 20,
          width: 100,
          height: 100,
          backgroundColor: car.color,
        }}
      ></div>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>
      <button type="button" onClick={updateColor}>
        Set Color{" "}
      </button>
    </>
  );
};

export default Objek;
